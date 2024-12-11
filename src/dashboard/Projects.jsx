import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import "../css/hover-card.css";

const Projects = () => {
  return (
    <div className="py-12 px-10 bg-gradient-to-l from-[#2234AE] from-0%  to-[#000000] to-40%  text-primary-content">
      <div className="mb-12">
        <h1 className="text-4xl  font-bold text-[#15803d] mb-4 underline underline-offset-8">
          Projects
        </h1>
        <p className="">
          I like exploring and learning new. I always build projects try out new
          tools and concepts.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  ">
        {/* project 1  */}
        <div className="border border-gray-700 rounded-lg relative">
          <div className="hover-card">
            <img
              className="w-full h-[350px]"
              src="https://i.ibb.co.com/SNKRbNL/Screenshot-2024-12-06-000901.png"
              alt=""
            />
          </div>
          <div className="absolute top-64 left-5">
            <div className="mt-4 flex items-center gap-3">
              <a href="https://github.com/abdurrahmanrahat/e-learning">
                <button className="border-2 border-[#15803d] px-6 py-2 lg:text-xl md:text-xl font-bold rounded-lg hover:bg-black flex items-center gap-3 bg-green-800 text-white ">
                  Github <FaGithub />
                </button>
              </a>
              <a href="https://brainwave-learning.netlify.app/">
                <button className="border-2 border-[#15803d] px-6 py-2 lg:text-xl md:text-xl font-bold rounded-lg hover:bg-green-800 flex items-center gap-3 hover:text-white">
                  Live Link <MdArrowOutward />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* project 2  */}
        <div className="border border-gray-700 rounded-lg relative">
          <div className="hover-card">
            <img
              className="w-full h-[350px]"
              src="https://i.ibb.co.com/HP8MMsv/Screenshot-2024-12-06-002457.png"
              alt=""
            />
          </div>
          <div className="absolute top-64 left-5">
            <div className="mt-4 flex items-center gap-3">
              <a href="https://assignment-12-client-sid-1307f.web.app/">
                <button className="border-2 border-[#15803d] px-6 py-2 lg:text-xl md:text-xl font-bold rounded-lg hover:bg-green-800 flex items-center gap-3 hover:text-white">
                  Live Link <MdArrowOutward />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* project 3  */}
        <div className="border border-gray-700 rounded-lg relative">
          <div className="hover-card">
            <img
              className="w-full h-[350px]"
              src="https://i.ibb.co.com/qj0ZzYc/Screenshot-2024-12-06-002636.png"
              alt=""
            />
          </div>
          <div className="absolute top-64 left-5">
            <div className="mt-4 flex items-center gap-3">
              <a href="https://brand-shop-client-side-d9c6a.web.app/">
                <button className="border-2 border-[#15803d] px-6 py-2 lg:text-xl md:text-xl font-bold rounded-lg hover:bg-green-800 flex items-center gap-3 hover:text-white">
                  Live Link <MdArrowOutward />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* project 4  */}
        <div className="border border-gray-700 rounded-lg relative">
          <div className="hover-card">
            <img
              className="w-full h-[350px]"
              src="https://i.ibb.co.com/nspYRvw/Screenshot-2024-12-06-005657.png"
              alt=""
            />
          </div>
          <div className="absolute top-64 left-5">
            <div className="mt-4 flex items-center gap-3">
              <a href="https://kester-soccer-club-project.netlify.app/">
                <button className="border-2 border-[#15803d] px-6 py-2 lg:text-xl md:text-xl font-bold rounded-lg hover:bg-green-800 flex items-center gap-3 hover:text-white">
                  Live Link <MdArrowOutward />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* project 5 */}
        <div className="border border-gray-700 rounded-lg relative">
          <div className="hover-card">
            <img
              className="w-full h-[350px]"
              src="https://i.ibb.co.com/r3y2M1H/Screenshot-2024-12-06-005332.png"
              alt=""
            />
          </div>
          <div className="absolute top-64 left-5">
            <div className="mt-4 flex items-center gap-3">
              <a href="https://rf-cars-projects.netlify.app/">
                <button className="border-2 border-[#15803d] px-6 py-2 lg:text-xl md:text-xl font-bold rounded-lg hover:bg-green-800 flex items-center gap-3 hover:text-white">
                  Live Link <MdArrowOutward />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* project 6  */}
        <div className="border border-gray-700 rounded-lg relative">
          <div className="hover-card">
            <img
              className="w-full h-[350px]"
              src="https://i.ibb.co/3pnx069/Screenshot-2024-06-22-193333.png"
              alt=""
            />
          </div>
          <div className="absolute top-64 left-5">
            <div className="mt-4 flex items-center gap-3">
              <a href="https://kester-soccer-club-project.netlify.app/">
                <button className="border-2 border-[#15803d] px-6 py-2 lg:text-xl md:text-xl font-bold rounded-lg hover:bg-green-800 flex items-center gap-3 hover:text-white">
                  Live Link <MdArrowOutward />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
