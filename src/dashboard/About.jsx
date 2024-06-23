import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import './background.css';
const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#2234AE] from-0%  to-[#000000] to-40%   text-primary-content bg-fixed py-16">
      <div className=" px-10 pb-5">
      <div className="mb-12">
        <h1 className="text-4xl  font-bold text-[#15803d]   mb-3 underline underline-offset-8">About</h1>
        <p className=" my-4">
          I am a Front-end web developer with expertise in creating attractive, user-friendly websites. Specializing in clean, responsive designs using HTML, CSS, Tailwind, JavaScript, and React. Proficient in Node.js, Express.js, and MongoDB. Eager to enhance your team – let's connect! Email me or use the provided information.
          </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 ">
        <div className="lg:w-[35%] border rounded border-gray-600">
          <img className="w-full h-full"
            src="https://i.ibb.co/HxKxv92/setu-img.png"
            alt=""
          />
        </div>
        <div className="lg:w-[65%] ">
          <div className="">
            <h1 className="text-3xl  font-bold text-[#15803d] mb-6">
              Front-End Web Developer.
            </h1>
            <p className="text-xl">
              Crafting pixel-perfect interfaces that merge aesthetics with
              functionality, I bring ideas to life through elegant and
              user-centric front-end development.
            </p>
          </div>
          <div>
            <div className="flex  mt-10 ">
              <div className="w-[50%]">
                <h3 className="flex items-center  lg:text-xl md:text-xl mb-3">
                  <IoIosArrowForward className="text-[#15803d] text-2xl" />{" "}
                  <span className=" font-bold mr-2">Birthday:</span> 8 May 2005
                </h3>
                <h3 className="flex items-center  lg:text-xl md:text-xl mb-3">
                  <IoIosArrowForward className="text-[#15803d] text-2xl" />{" "}
                  <span className=" font-bold mr-2">Phone:</span> 01761332232
                </h3>
                <h3 className="flex items-center  lg:text-xl md:text-xl mb-3">
                  <IoIosArrowForward className="text-[#15803d] text-2xl" />{" "}
                  <span className=" font-bold mr-2">city:</span> Dhaka
                </h3>
              </div>
              <div className="w-[50%] ">
                <h3 className="flex items-center  lg:text-xl md:text-xl mb-3">
                  <IoIosArrowForward className="text-[#15803d] text-2xl" />{" "}
                  <span className=" font-bold mr-2">Age:</span> 19
                </h3>
                <h3 className="flex items-center  lg:text-xl md:text-xl mb-3">
                  <IoIosArrowForward className="text-[#15803d] text-2xl" />{" "}
                  <span className=" font-bold mr-2">Email:</span> msetu5763@gmail.com
                </h3>
              </div>
            </div>
          </div>
          <div className="mt-7 mb-10 text-xl">
            <p>Highly motivated Front End Developer with a passion for creating efficient and scalable web applications. Seeking an entry-level position to apply my technical skills, collaborate with a talented team, and contribute to the development of innovative software solutions. Committed to continuous learning and staying updated with the latest technologies in the MERN stack.</p>
          </div>
          <div>
          <a href="/public/setu-resume/Richard.pdf" download>
          <button className="btn text-left btn-outline border-0 border-[#15803d] hover:bg-black hover:border-[#15803d] hover:border-2 border-b-4 text-xl lg:  text-primary-content">
          <MdOutlineFileDownload /> My resume
          </button>
          </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
