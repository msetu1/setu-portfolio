import { useState } from "react";

const Contact = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [subject,setSubject]=useState('')
  const [message,setMessage]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const email = form.get('email')
    const subject = form.get('subject')
    const message = form.get('message')
    console.log(email,name,subject,message);
  }
  return (
    <div className="min-h-screen pt-12 pb-10 px-10 bg-gradient-to-r from-[#2234AE] from-0%  to-[#000000] to-40%   text-primary-content bg-fixed">
      <h1 className="text-4xl  font-bold text-[#15803d] underline underline-offset-8 ">Let's Connect</h1>
      <h3 className="text-xl font-semibold mb-10  mt-4">Send me a Direct message</h3>
      <form onSubmit={handleSubmit} className="emailForm">
      <div className="max-w-4xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-2">Your Name</h1>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id=""
              className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-gray-900"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-2">Email</h1>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              id=""
              className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-gray-900"
              placeholder="Your Email Address"
            />
          </div>
        </div>
        <div className="mb-5">
          <h1 className="text-2xl font-semibold mb-2">Subject</h1>
          <input
            type="text"
            name="subject"
            value={subject}
              onChange={(e)=>setSubject(e.target.value)}
            id=""
            className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-gray-900"
            placeholder="subject"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">Message</h1>
          <textarea
            name=""
            id=""
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            cols="30"
            rows="8"
            className="w-full border py-4 px-5 rounded-md border-[#15803d] bg-gray-900"
            placeholder="Your Message"
          ></textarea>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
      <button className="border-2 border-[#15803d] px-6 py-2 text-xl font-bold rounded-lg hover:bg-black flex items-center gap-3 text-white bg-green-800 " type="submit" value="Send">Send Message </button>
      </div>
      </form>
    </div>
  );
};

export default Contact;
