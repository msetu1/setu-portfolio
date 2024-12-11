import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Details = () => {
  return (
    <div>
      <div className="flex flex-col  items-center justify-center pt-8">
        <img
          className="w-[140px] rounded-full border-8 border-[#15803d] h-[140px]"
          src="https://i.ibb.co/HxKxv92/setu-img.png"
          alt=""
        />
        <div>
          <h1 className="text-3xl font-bold text-primary-content  mt-4 text-center">
            Mst.Setu Akther
          </h1>
        </div>
        <div className="grid grid-flow-col  mt-4">
          <div className="hover:bg-slate-700 rounded-full p-3 shadow-lg  ">
            <a href="https://www.facebook.com/profile.php?id=100093013625415">
              {" "}
              <FaFacebookF className=" hover:text-white text-primary-content text-2xl  " />
            </a>
          </div>
          <div className="hover:bg-slate-700 rounded-full p-3 shadow-lg">
            <a href="https://github.com/msetu1">
              {" "}
              <FaGithub className="hover:text-white text-primary-content text-2xl  " />
            </a>
          </div>
          <div className="hover:bg-slate-700 rounded-full p-3 shadow-lg">
            <a href="https://www.linkedin.com/feed/">
              {" "}
              <FaLinkedin className="hover:text-white text-primary-content text-2xl  " />
            </a>
          </div>
        </div>
        <div className="mt-3">
          <a href="/public/setu-resume/Setu-Resume.pdf" download>
            <button className="btn text-left btn-outline border-0 border-[#15803d] hover:bg-black hover:border-[#15803d] hover:border-2 border-b-4 text-xl text-primary-content hover:text-primary-content">
              <MdOutlineFileDownload /> Download resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
