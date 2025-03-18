import React, { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="flex justify-center my-20">
      <div className="w-full max-w-sm">
        <h3 className="lg:text-5xl text-3xl font-bold text-center mb-6">
          Contact Us
        </h3>
        <div className="bg-base-100 shadow-sm rounded-lg">
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="input"
              />
              <label className="fieldset-label">Email</label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="input"
              />
              <label className="fieldset-label">Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea"
              ></textarea>
              <button type="submit" className="btn btn-neutral w-[322px] mt-4">
                Send Me
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
