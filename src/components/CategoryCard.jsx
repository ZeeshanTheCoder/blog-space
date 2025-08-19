import React from "react";
import { FaCode } from "react-icons/fa"; // example icon

const CategoryCard = ({
  title,
  icon,
  posts,
  followers,
  badge,
  description,
}) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[220px]">
      {/* Icon */}
      <div className="flex items-start justify-between">
        <div className="bg-[#98CF9833] rounded-xl p-5">
          <img src={icon} alt="" width={20} height={20} />
        </div>

        {/* Badge (if any) */}
        {badge && (
          <div className="absolute top-4 right-4 flex items-center space-x-1 text-green-500 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
            <span>{badge}</span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-medium text-primary mt-6 mb-4">{title}</h3>
      <p className="font-normal text-[#4B5563] pb-7">
        {description}
      </p>

      {/* Bottom Row */}
      <div className="flex items-center justify-between text-sm text-gray-600 mt-auto">
        <div className="flex space-x-4 text-primary font-normal">
          <p className="text-primary">
            {posts} <span className="text-[#6B7280]">posts</span>
          </p>
          <p className="text-primary">
            {followers} <span className="text-[#6B7280]">followers</span>
          </p>
        </div>
        <button className="bg-primary text-white px-4 py-1.5 cursor-pointer rounded-md hover:bg-green-800 transition">
          Follow
        </button>
      </div>
       {/* Bottom green line */}
      <div className="absolute bottom-0 left-0 w-full h-[10px] bg-[linear-gradient(90deg,_#2E5A2E_0%,_#98CF98_100%)] rounded-b-xl"></div>

    </div>
  );
};

export default CategoryCard;
