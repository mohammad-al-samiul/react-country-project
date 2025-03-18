import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Object.fromEntries(formData.entries());

    const toastId = toast.loading("Sending Message...");
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message Sent Successfully!", { id: toastId });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.success(`Failed, ${error.text}`, { id: toastId });
        }
      );
  };

  return (
    <div className="flex justify-center my-20">
      <div>
        <h3 className="lg:text-5xl text-3xl font-bold text-center mb-6">
          Contact Us
        </h3>
        <div className="bg-base-100 shadow-sm rounded-lg">
          <form ref={form} onSubmit={handleSubmit} className="card-body ">
            <fieldset className="fieldset  w-xs lg:w-lg p-2 rounded-box">
              <label className="fieldset-label">Name</label>
              <input
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="input  lg:w-lg"
              />
              <label className="fieldset-label">Email</label>
              <input
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="input lg:w-lg"
              />
              <label className="fieldset-label">Message</label>
              <textarea
                required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea lg:w-lg"
              ></textarea>
              <button type="submit" className="btn btn-neutral   lg:w-lg mt-4">
                Send Me
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
