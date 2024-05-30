const Contact = () => {
  return (
    <div className="h-full pt-12 mb-10 lg:bg-black px-10">
      <h1 className="text-4xl  font-bold text-[#15803d] ">Let's Connect</h1>
      <h3 className="text-xl font-semibold mb-10 text-primary-content mt-2">Send me a Direct message</h3>
      <div className="max-w-4xl mx-auto text-primary-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-2">Your Name</h1>
            <input
              type="text"
              name="name"
              id=""
              className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-black"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-2">Email</h1>
            <input
              type="email"
              name="email"
              id=""
              className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-black"
              placeholder="Your Email Address"
            />
          </div>
        </div>
        <div className="mb-5">
          <h1 className="text-2xl font-semibold mb-2">Subject</h1>
          <input
            type="text"
            name="subject"
            id=""
            className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-black"
            placeholder="subject"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">Message</h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-black"
            placeholder="Your Message"
          ></textarea>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
      <button className="border-2 border-[#15803d] px-6 py-2 text-xl font-bold rounded-lg hover:bg-black flex items-center gap-3 bg-green-800 text-primary-content">Send Message </button>
      </div>
    </div>
  );
};

export default Contact;
