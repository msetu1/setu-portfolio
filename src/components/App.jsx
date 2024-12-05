import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ParticlesContainer from "../particles/ParticlesContainer";
import { BiLogoNetlify } from "react-icons/bi";
const App = () => {
    return (
        <div className=" min-h-screen bg-[#060417] text-primary-content">
          <ParticlesContainer></ParticlesContainer>
            <div className=" lg:max-w-4xl lg:mx-auto lg:pt-48 pt-10 mx-10 ">
            <div className="">
            <h2 className="text-2xl font-semibold mb-3">Assalamu-Alaikum</h2>
          <h1 className="text-xl font-semibold mb-2">
            My Name is  {""}
            <span className="text-5xl text-[#15803d] font-bold">
              Setu Akther
            </span>
          </h1>
          <h3 className="text-xl font-semibold">I am a Front-end Developer</h3>
          <p className="  my-4">
          I am a Front-end web developer with expertise in creating attractive, user-friendly websites. Specializing in clean, responsive designs using HTML, CSS, Tailwind, JavaScript, and React. Proficient in Node.js, and MongoDB. Eager to enhance your team – let's connect! Email me or use the provided information.
          </p>
          <div className="flex gap-5">
          <a href="/public/setu-resume/Setu Resume.pdf" download>
          <button className="btn text-left btn-outline border-0 border-[#15803d] hover:bg-black hover:border-[#15803d] hover:border-2 border-b-4 text-xl text-primary-content ">
          <MdOutlineFileDownload /> My resume
          </button>
          </a>
          <button className="btn text-left btn-outline border-0 border-[#15803d] hover:bg-black hover:border-[#15803d] hover:border-2 border-b-4 text-xl text-primary-content">
          <NavLink to='/dashboard'>Explore Now</NavLink>
          </button>
          </div>
          <div className="flex mt-6 gap-4">
          <div className="bg-slate-700 rounded-full p-3 shadow-lg hover:bg-green-600 ">
            <a href="https://app.netlify.com/teams/msetu1/sites"> <BiLogoNetlify className=" hover:text-white text-[#0d9488] text-2xl  " /></a>
            </div>
            <div className="bg-slate-700 rounded-full p-3 shadow-lg hover:bg-green-600 ">
            <a href="https://www.facebook.com/profile.php?id=100093013625415"> <FaFacebookF className=" hover:text-white text-primary-content text-2xl  " /></a>
            </div>
            <div className="bg-slate-700 rounded-full p-3 shadow-lg hover:bg-green-600">
            <a href="https://github.com/msetu1"> <FaGithub className="hover:text-white text-primary-content text-2xl  " /></a>
            </div>
            <div className="bg-slate-700 rounded-full p-3 shadow-lg hover:bg-green-600">
            <a href="https://www.linkedin.com/feed/"> <FaLinkedin className="hover:text-white text-primary-content text-2xl  " /></a>
            </div>
          </div>
            </div>
            </div>
            
        </div>
    );
};

export default App;