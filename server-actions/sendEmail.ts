"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  let data;
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  /*
FormData {
  [Symbol(state)]: [
    { name: 'senderEmail', value: 'asd@gmail.com' },
    { name: 'message', value: 'asd' }
  ]
}
  */

  //Simple server-side validation.
  if (!validateString(senderEmail, 500)) {
    return {
      statusCode: 400,
      error: "Invalid sender e-mail",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      statusCode: 400,
      error: "Invalid message",
    };
  }
  try {
    data = await resend.emails.send({
      //CONNECT OWN DOMAIN
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "brunocorraodev@gmail.com",
      subject: `Message from portfolio contact form`,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
