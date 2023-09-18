"use client";

import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/customhooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/server-actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-24 mt-24 sm:mb-28 w-[min(100%,38rem)]text-center scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80 text-center">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:brunocorraodev@gmail.com" aria-label="Link to Bruno's email.">
          brunocorraodev@gmail.com
        </a>{" "}
        or through this form:
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          type="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your@email.com"
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          className=" h-52 my-3 roudned-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          id=""
          cols={30}
          rows={10}
          placeholder="Your message..."
          required
          maxLength={5000}
          name="message"
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}
