import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hi3lo23", "template_vklva4f", form.current, {
        publicKey: "Dwt0X6aJ1cMh0oxtw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="min-h-screen pt-12 pb-10 px-10 bg-gradient-to-r from-[#2234AE] from-0%  to-[#000000] to-40%   text-primary-content bg-fixed">
      <h1 className="text-4xl  font-bold text-[#15803d] underline underline-offset-8 ">
        Let's Connect
      </h1>
      <h3 className="text-xl font-semibold mb-10  mt-4">
        Send me a Direct message
      </h3>
      <form
      ref={form} onSubmit={sendEmail}
      className="emailForm">
        <div className="max-w-4xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
            <div className="w-full">
              <h1 className="text-2xl font-semibold mb-2">Your Name</h1>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-gray-900"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full">
              <h1 className="text-2xl font-semibold mb-2">Email</h1>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-gray-900"
                placeholder="Your Email Address"
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <h1 className="text-2xl font-semibold mb-2">Subject</h1>
            <input
              type="text"
              name="subject"
              id="subject"
              className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-gray-900"
              placeholder="subject"
              required
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Message</h1>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="8"
              className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-gray-900"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <button
            className="border-2 border-[#15803d] px-6 py-2 text-xl font-bold rounded-lg hover:bg-black flex items-center gap-3 text-white bg-green-800 "
            type="submit"
            value="Send"
          >
            Send Message{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
