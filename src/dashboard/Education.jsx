import { NavLink } from "react-router-dom";

const Education = () => {
  return (
    <div className="pt-12 px-10 bg-gradient-to-r from-[#2234AE] from-0%  to-[#000000] to-40%   text-primary-content min-h-screen bg-fixed  ">
      <div className="mb-12">
        <h1 className="text-4xl  font-bold text-[#15803d]   mb-4 underline underline-offset-8 ">
          Educational Qualifications
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row  gap-10 mt-5 ">
        <div className="lg:w-[50%] border p-10 shadow-lg border-gray-600 rounded-lg">
          <h1 className="text-3xl  font-bold text-[#15803d] my-2">
            Secondary school Certificate
          </h1>
          <p className="mt-2 font-semibold text-xl">2018-2021</p>
          <h1 className="text-md font-semibold text-2xl my-2">
            Bangula M.L High School
          </h1>
          <h2 className="text-md font-semibold text-xl">
            Bangula,Dhaka,Bangladesh
          </h2>
        </div>
        <div className="lg:w-[50%] border p-10 shadow-lg border-gray-600 rounded-lg">
          <h1 className="text-3xl  font-bold text-[#15803d] my-2">
            Diploma In Computer Science & Technology
          </h1>
          <p className="mt-2 font-semibold text-xl">2021-2025 (Running)</p>
          <h1 className="text-md font-semibold text-2xl my-2">
            Shyamoli Ideal Polytechnic Institute
          </h1>
          <h2 className="text-md font-semibold text-xl">
            Mohammad pur,Dhaka,Bangladesh
          </h2>
        </div>
      </div>
     
    </div>
  );
};

export default Education;
