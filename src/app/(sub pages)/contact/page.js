import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Summon the Wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Step into the realm of innovation and let your vision take form.
            Whether you seek to craft a powerful web presence, build dynamic
            full-stack applications, or explore potential collaborations, your
            ideas are the sparks that ignite this digital tapestry. Use the form
            below to send your inquiries, and let&apos;s bring your projects to
            life with precision and passion.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
