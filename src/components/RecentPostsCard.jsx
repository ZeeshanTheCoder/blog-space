import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const RecentPostsCard = () => {
  const posts = [
    {
      title: "The Art of Storytelling",
      category: "Writing",
      author: "Emma Thompson",
    },
    {
      title: "Digital Marketing Trends",
      category: "Business",
      author: "Mal Q.",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-primary text-lg font-medium">Recent Posts</h2>
        <HiOutlineDotsHorizontal className="text-gray-500 text-xl cursor-pointer" />
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-2 px-6 py-2 bg-[#F9FAFB] text-gray-500 text-[12px]">
        <div>TITLE</div>
        <div>AUTHOR</div>
      </div>

      {/* Table Rows */}
      {posts.map((post, index) => (
        <div
          key={index}
          className="grid grid-cols-2 px-6 py-4 border-t border-gray-100 items-center text-sm"
        >
          {/* Title + Category */}
          <div>
            <p className="text-[#111827] font-normal text-[14px]">
              {post.title}
            </p>
            <p className="text-[#6B7280]">{post.category}</p>
          </div>

          {/* Author with Icon */}
          <div className="flex items-center space-x-2">
            <div className="bg-secondary rounded-full p-2 text-black">
              <img
                src="/assets/icons/users-vector.png"
                className="invert"
                alt=""
              />
            </div>
            <span className="text-black">{post.author}</span>
          </div>
        </div>
      ))}

      {/* View All Posts — pushed to bottom */}
      <div className="bg-[#F9FAFB] text-secondary text-sm py-3 px-7 rounded-b-xl cursor-pointer hover:underline mt-auto">
        View All Posts
      </div>
    </div>
  );
};

export default RecentPostsCard;
