import { type NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

type RequestData = {
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
};

type EmailData = {
    to: string;
    from: string;
    subject: string;
    html: string;
};

export async function POST(request: NextRequest) {
    let requestData: RequestData;

    try {
        requestData = await request.json();
    } catch (error) {
        return NextResponse.json(
            { message: "Invalid JSON data." },
            { status: 400 }
        );
    }
    if (
        !requestData.name ||
        !requestData.email ||
        !requestData.phoneNumber ||
        !requestData.message
    ) {
        return NextResponse.json(
            { message: "Missing required fields." },
            { status: 400 }
        );
    }
    console.log("Request data:", requestData);

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

async function sendEmail(requestData: RequestData) {
    console.log("Sending email with data:", requestData);

    const msg = {
        to: "devops@torishojp.com",
        from: "devops@torishojp.com",
        subject: "Test Email from SendGrid",
        //text: request.content,
        html:
            "This is the first email sent with SendGrid. Also the json of the request is: " +
            JSON.stringify(requestData),
    };

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
        throw new Error("SENDGRID_API_KEY environment variable is not set.");
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
