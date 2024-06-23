import { NavLink, Outlet } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import Details from "../components/Details";
import { CiMenuFries } from "react-icons/ci";
import ParticlesContainer from "../particles/ParticlesContainer";

const Dashboard = () => {
  const links = (
    <>
      <li className="mb-2">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold  text-gray-600 "
              : ""
          }
        >
          <h1 className="flex items-center gap-2   ">
            <IoHomeOutline />
            Home
          </h1>
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/dashboard/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold  text-[#16a34a]"
              : ""
          }
        >
          <h1 className="flex items-center gap-2">
            <RiContactsLine /> About
          </h1>
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/dashboard/skills"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold  text-[#16a34a]"
              : ""
          }
        >
          <h1 className="flex items-center gap-2">
            <GrNotes /> Skills
          </h1>
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/dashboard/education"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold  text-[#16a34a]"
              : ""
          }
        >
          <h1 className="flex items-center gap-2">
            <FaGraduationCap /> Education
          </h1>
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink
          to="/dashboard/projects"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold  text-[#16a34a]"
              : ""
          }
        >
          <h1 className="flex items-center gap-2">
            <AiOutlineFundProjectionScreen /> Projects
          </h1>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold  text-[#16a34a]"
              : ""
          }
        >
          <h1 className="flex items-center gap-2">
            <MdOutlineEmail /> Contact
          </h1>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#060417]">
      <ParticlesContainer></ParticlesContainer>
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-[20%] min-h-screen bg-slate-900 fixed z-10 hidden lg:block">
          <NavLink to="/">
            <h2 className="text-white font-extrabold mt-4 ml-4">
              <CiMenuFries className="text-4xl" />
            </h2>
          </NavLink>
          <Details></Details>
          <ul className="menu  text-xl text-slate-400 lg:ml-12 mt-5 md:ml-[40%] ml-[30%]">
            {links}
          </ul>
        </div>
        <div className="flex-1 lg:pl-[20%]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
