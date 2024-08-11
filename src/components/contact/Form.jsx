"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Casting you spell, please wait...");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success(
            "Your spell has been successful, I will send you a spell back soon!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          toast.error(
            "Something is wrong with your spell, please cast again later!",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Omkar",
      from_name: data.name,
      reply_to: data.Email,
      message: data.Message,
    };
    sendEmail(templateParams);
  };
  console.log(errors);

  return (
    <>
      <Toaster richColors={true} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <input
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required!",
            maxLength: 80,
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <input
          type="email"
          placeholder="Email"
          {...register("Email", {
            required: "This field is required!",
            pattern: /^\S+@\S+$/i,
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.Email && (
          <span className="inline-block self-start text-accent">
            {errors.Email.message}
          </span>
        )}
        <textarea
          placeholder="Message"
          {...register("Message", {
            required: "This field is required!",
            max: 256,
            min: 50,
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.Message && (
          <span className="inline-block self-start text-accent">
            {errors.Message.message}
          </span>
        )}

        <input
          value="Cast Your Spell"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
      </form>
    </>
  );
}
