import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ParticlesContainer from "../particles/ParticlesContainer";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

const App = () => {
  // theme
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("black", "dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="min-h-screen bg-[#060417] text-primary-content">
      <ParticlesContainer></ParticlesContainer>
      <div className="flex justify-end pr-20 pt-10">
        <label className="grid cursor-pointer place-items-center">
          <input
            type="checkbox"
            onChange={handleToggle}
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <div className=" lg:max-w-4xl lg:mx-auto lg:pt-48 pt-10 mx-10 ">
        <div className="">
          <h2 className="text-2xl font-semibold mb-10">Hello !!</h2>

          <div className="flex gap-2">
            <p className="text-[30px] font-bold">I am </p>
            <div
              style={{
                fontSize: "30px",
                textAlign: "center",
                color: "#15803d",
                fontWeight: "bold",
              }}
            >
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Front end Developer",
                  "React Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>
          <p className=" my-4 max-w-[600px]">
            I am a MERN Stack web developer with expertise in creating
            attractive, user-friendly websites. Specializing in clean,
            responsive designs using HTML, CSS, Tailwind, JavaScript, and React.
            Proficient in Node.js, and MongoDB. Eager to enhance your team –
            let's connect! Email me or use the provided information.
          </p>
          <div className="flex gap-5">
            <a href="/public/setu-resume/Setu-Resume.pdf" download>
              <button className="btn text-left btn-outline border-0 border-[#15803d] hover:bg-black hover:border-[#15803d] hover:border-2 border-b-4 text-xl text-primary-content ">
                <MdOutlineFileDownload /> My resume
              </button>
            </a>
            <button className="btn text-left btn-outline border-0 border-[#15803d] hover:bg-black hover:border-[#15803d] hover:border-2 border-b-4 text-xl text-primary-content">
              <NavLink to="/dashboard">Explore Now</NavLink>
            </button>
          </div>
          <div className="flex mt-6 gap-4">
            <div className="bg-slate-700 rounded-full p-3 shadow-lg hover:bg-green-600 ">
              <a href="https://www.facebook.com/profile.php?id=100093013625415">
                {" "}
                <FaFacebookF className=" hover:text-white text-primary-content text-2xl  " />
              </a>
            </div>
            <div className="bg-slate-700 rounded-full p-3 shadow-lg hover:bg-green-600">
              <a href="https://github.com/msetu1">
                {" "}
                <FaGithub className="hover:text-white text-primary-content text-2xl  " />
              </a>
            </div>
            <div className="bg-slate-700 rounded-full p-3 shadow-lg hover:bg-green-600">
              <a href="https://www.linkedin.com/feed/">
                {" "}
                <FaLinkedin className="hover:text-white text-primary-content text-2xl  " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
