"use client";
import React, { useState } from "react";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import SiteContent from "@/components/common/site-content";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Form, useForm, SubmitHandler } from "react-hook-form";
import { Text } from "@/components/ui/text";
import PhoneInput from "react-phone-number-input";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export default function App() {
  const {
    register,
    formState: { errors },
    control,
  } = useForm<FormData>();
  const [phoneNumber, setPhoneNumber] = useState<string>();

  return (
    <div>
      <Header />
      <SiteContent>
        <Card>
          <CardContent>
            <div>
              <Heading>Contact Us</Heading>

              <Form
                action={"/api/sendEmail"}
                encType={"application/json"} // you can also switch to json object
                onSubmit={async (data) => {
                  console.log(data);
                }}
                onSuccess={() => {
                  alert("Your application is updated.");
                }}
                onError={() => {
                  alert("Submission has failed.");
                }}
                control={control}
              >
                {/* register your input into the hook by invoking the "register" function */}
                <Text>Name:</Text>
                <input
                  defaultValue=""
                  {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}
                <Text>Email:</Text>
                <input
                  defaultValue=""
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
                <Text>Phone Number:</Text>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  withCountryCallingCode
                  international
                  {...register("phoneNumber", { required: true })}
                  onChange={setPhoneNumber}
                />
                {errors.phoneNumber && <span>This field is required</span>}
                <Text>Message:</Text>
                <textarea
                  defaultValue=""
                  {...register("message", { required: true })}
                />
                {errors.message && <span>This field is required</span>}

                <Button type="submit">Submit</Button>
              </Form>
            </div>
          </CardContent>
        </Card>
      </SiteContent>
      <Footer />
    </div>
  );
}
