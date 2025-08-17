import React from "react";
import { FiUsers } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const RecentUsersCard = () => {
  const users = [
    {
      name: "Alexandra Mitchell",
      email: "alexandra.mitchell@email.com",
      role: "Author",
      joined: "Mar 15",
    },
    {
      name: "David Park",
      email: "david.park@email.com",
      role: "Reader",
      joined: "Mar 9",
    },
    {
      name: "Rachel Foster",
      email: "rachel.foster@email.com",
      role: "Author",
      joined: "Mar 9",
    },
    {
      name: "Jennifer Kim",
      email: "jennifer.kim@email.com",
      role: "Reader",
      joined: "Mar 9",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-[#2E5A2E] text-lg font-medium">Recent Users</h2>
        <HiOutlineDotsHorizontal className="text-gray-500 text-xl cursor-pointer" />
      </div>

      {/* Table Header */}
      <div className="flex justify-between px-6 py-2 bg-[#F9FAFB] text-gray-500 text-[12px] font-semibold">
        <div className="w-1/3">USER</div>
        <div className="w-1/3">EMAIL</div>
        <div className="w-1/3 text-right">ROLE</div>
      </div>

      {/* Table Rows */}
      <div className="flex-grow overflow-auto">
        {users.map(({ name, email, role, joined }, index) => (
          <div
            key={index}
            className="flex justify-between px-6 py-4 border-b border-gray-100 items-center text-sm"
          >
            {/* User with icon, name and joined date */}
            <div className="flex items-center space-x-3 text-green-800 w-1/3">
              <div className="bg-[#98CF98] rounded-full p-3">
                <img
                  src="/assets/icons/users-vector.png"
                  className="invert"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[#111827] font-[14px]">{name}</p>
                <p className="text-xs text-gray-500">Joined {joined}</p>
              </div>
            </div>

            {/* Email */}
            <div className="text-gray-700 w-1/3">{email}</div>

            {/* Role */}
            <div className="w-1/3 text-right">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  role === "Author"
                    ? "bg-blue-200 text-blue-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {role}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Users */}
      <div className="bg-[#F9FAFB] text-[#98CF98] text-sm py-3 px-7 rounded-b-xl cursor-pointer hover:underline mt-auto">
        View All Users
      </div>
    </div>
  );
};

export default RecentUsersCard;
