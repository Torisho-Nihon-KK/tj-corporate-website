import { type NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import type { TurnstileServerValidationResponse } from "@marsidev/react-turnstile";
import { render } from "@react-email/components";
import EnquiryEmailContent from "./enquiry";

type ContactFormData = {
    firstName: string;
    lastName: string;
    companyName: string;
    phoneNumber: string;
    email: string;
    message: string;
    communication: boolean;
    consent: boolean;
    turnstile: string;
    timestamp: string;
};

// type EmailData = {
//     to: string;
//     from: string;
//     subject: string;
//     html: string;
// };

const verifyEndpoint =
    "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const secret = process.env.TURNSTILE_SECRET_KEY;

export async function POST(request: NextRequest) {
    let requestData: ContactFormData;

    try {
        requestData = await request.json();
    } catch {
        return NextResponse.json(
            { message: "Invalid JSON data:" },
            { status: 400 }
        );
    }

    const turnstileToken = requestData.turnstile;

    // TODO: DATA VALIDATION

    // Verify Turnstile token
    if (!secret) {
        return NextResponse.json(
            { message: "Turnstile secret key is not set." },
            { status: 500 }
        );
    }
    if (!turnstileToken) {
        return NextResponse.json(
            { message: "Turnstile token is missing." },
            { status: 400 }
        );
    }
    const verifyResponse = await fetch(verifyEndpoint, {
        method: "POST",
        body: `secret=${encodeURIComponent(
            secret
        )}&response=${encodeURIComponent(turnstileToken)}`,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
        },
    });

    const verifyData: TurnstileServerValidationResponse =
        await verifyResponse.json();

    if (!verifyData.success) {
        return NextResponse.json(
            {
                message: "Turnstile verification failed.",
                errors: verifyData["error-codes"],
            },
            { status: 400 }
        );
    }

    // Check required fields
    if (
        !requestData.firstName ||
        !requestData.lastName ||
        !requestData.companyName ||
        !requestData.message ||
        !requestData.email ||
        !requestData.consent
    ) {
        return NextResponse.json(
            { message: "Missing required fields." },
            { status: 400 }
        );
    }
    // console.log("Request data:", requestData);
    requestData.timestamp = new Date().toLocaleString();

    await sendEmail(requestData);

    return NextResponse.json(
        { message: "Email sent successfully!" },
        { status: 200 }
    );
}

export async function GET() {
    return NextResponse.json(
        { message: "Method not allowed." },
        { status: 405 }
    );
}

async function sendEmail(requestData: ContactFormData) {
    // console.log("Sending email with data:", requestData);

    const emailHtml = await render(<EnquiryEmailContent {...requestData} />);

    const msg = {
        to: "devops@torishojp.com",
        from: "devops@torishojp.com",
        subject: "Test Email from SendGrid",
        //text: request.content,
        html: emailHtml,
    };

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
        throw new Error(
            "NEXT_PUBLIC_SENDGRID_API_KEY environment variable is not set."
        );
    }
    sgMail.setApiKey(apiKey);
    await sgMail
        .send(msg)
        .then(() => {
            //console.log(`Email ${content} sent to ${email} successfully.`);
        })
        .catch((error) => {
            console.error(
                `Email ${msg.html} failed to be sent to ${msg.to}. Error: ${error}`
            );
        });
}
