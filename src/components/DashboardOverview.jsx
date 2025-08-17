import {
  FiFileText,
  FiUsers,
  FiMessageCircle,
  FiUserCheck,
} from "react-icons/fi";
import RecentPostsCard from "./RecentPostsCard";
import RecentUsersCard from "./RecentUsersCard";

export default function DashboardOverview() {
  return (
    <section className="p-3 space-y-6">
      {/* Title and Subtitle */}
      <div>
        <h2 className="text-[30px] text-[#2E5A2E] mb-1">Dashboard Overview</h2>
        <p className="text-green-700 text-sm">
          Monitor your blog&apos;s performance and manage content
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Total Posts",
            value: 156,
            icon: "/assets/icons/posts-vector.png",
            change: "+12% from last month",
            invert: true,
          },
          {
            title: "Total Users",
            value: 2897,
            icon: "/assets/icons/users-vector.png",
            change: "+8% from last month",
            invert: true,
          },
          {
            title: "Total Comments",
            value: 1929,
            icon: "/assets/icons/comments-vector.png",
            change: "+15% from last month",
            invert: true,
          },
          {
            title: "Active Users",
            value: 1932,
            icon: "/assets/icons/active-users-vector.png",
            change: "+5% from last month",
            invert: false,
          },
        ].map(({ title, value, icon, change, invert }) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between"
          >
            <div>
              <p className="mt-2 text-sm text-[#4B5563]">{title}</p>
              <p className="text-green-900 text-[30px]">
                {value.toLocaleString()}
              </p>
              <p className="text-[#16A34A] text-xs">{change}</p>
            </div>
            <div className="bg-[#98CF98] rounded rounded-2xl p-3">
              <img
                src={icon}
                className={`${invert ? "invert filter" : ""}`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Posts Table */}
        <RecentPostsCard />
        {/* Recent Users Table */}
        <RecentUsersCard />
      </div>
      {/* Quick Actions */}
      <div className="mt-10 bg-white rounded-lg p-5 shadow-md">
        <h3 className="text-[#1d4d2c] mb-5 text-lg font-semibold">
          Quick Actions
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <button className="flex-1 flex items-center justify-center space-x-2 border-2 border-dashed border-gray-300 bg-transparent text-gray-700 rounded-md py-4 cursor-pointer hover:bg-green-50 transition">
            <img
              src="/assets/icons/add-vector.png"
              alt="Add Post"
              className="mr-3"
            />
            <span>Create New Post</span>
          </button>

          <button className="flex-1 flex items-center justify-center space-x-2 border-2 border-dashed border-gray-300 bg-transparent text-gray-700 rounded-md py-4 cursor-pointer hover:bg-green-50 transition">
            <img
              src="/assets/icons/add-user-vector.png"
              alt="Add User"
              className="mr-3"
            />
            <span>Add New User</span>
          </button>

          <button className="flex-1 flex items-center justify-center space-x-2 border-2 border-dashed border-gray-300 bg-transparent text-gray-700 rounded-md py-4 cursor-pointer hover:bg-green-50 transition">
            <img
              src="/assets/icons/add-category-vector.png"
              alt="Add Category"
              className="mr-3"
            />
            <span>Create Category</span>
          </button>
        </div>
      </div>
    </section>
  );
}
