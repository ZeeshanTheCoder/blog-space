import React from "react";
import {
  FiGrid,
  FiFileText,
  FiUsers,
  FiTag,
  FiMessageCircle,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const menuItems = [
  {
    label: "Dashboard",
    icon: "/assets/icons/dashboard-vector.png",
    active: true,
  },
  { label: "Posts", icon: "/assets/icons/posts-vector.png" },
  { label: "Users", icon: "/assets/icons/users-vector.png" },
  { label: "Categories", icon: "/assets/icons/categories-vector.png" },
  { label: "Comments", icon: "/assets/icons/comments-vector.png" },
  { label: "Analytics", icon: "/assets/icons/analytics-vector.png" },
  { label: "Settings", icon: "/assets/icons/settings-vector.png" },
];

const AdminSidebar = ({ isOpen, closeSidebar }) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 w-64 h-screen bg-primary text-white z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:flex
      `}
    >
      <div className="flex flex-col justify-between h-full w-full p-4">
        <div>
          <div className="mb-8">
            <h2 className="text-white text-[24px] leading-8 font-[pacifico]">
              BlogSpace
            </h2>
            <p className="text-sm text-gray-300">Admin Panel</p>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer 
                  ${
                    item.active
                      ? "bg-secondary text-primary"
                      : "hover:bg-secondary text-[white]"
                  }`}
              >
                <img src={item.icon} alt="" />
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>

        <div className="py-2">
          <button className="flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer hover:bg-secondary text-[white]">
            <img src="/assets/icons/logout-vector.png" alt="" />{" "}
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
