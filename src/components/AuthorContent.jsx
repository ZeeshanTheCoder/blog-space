import React from "react";
import {
  FaFileAlt,
  FaCheck,
  FaPen,
  FaEye,
  FaDownload,
  FaList,
  FaFilter,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";

const AuthorContent = () => {
  return (
    <>
      <aside className="w-full md:w-64 bg-white p-4 border-r">
        {/* Quick Stats */}
        <div>
          <h2 className="text-primary font-medium text-lg mb-4">Quick Stats</h2>
          <div className="space-y-3">
            {[
              {
                icon: "assets/icons/posts-icon.svg",
                label: "Total Posts",
                count: 29,
                color: "#98CF98",
              },
              {
                icon: "assets/icons/published-icon.svg",
                label: "Published",
                count: 18,
                color: "#DCFCE7",
              },
              {
                icon: "assets/icons/draft-icon.svg",
                label: "Drafts",
                count: 6,
                color: "#FEF9C3",
              },
              {
                icon: "assets/icons/show-icon.svg",
                label: "Total Views",
                count: 1297,
                color: "#DBEAFE",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-lg"
              >
                <div className="flex flex-col">
                  <span className="text-primary text-2xl font-medium">
                    {item.count}
                  </span>
                  <span className="text-[#4B5563] text-xs">{item.label}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    <img src={item.icon} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-primary font-medium text-lg mb-4">
            Quick Actions
          </h2>
          <div className="space-y-2">
            {[
              { icon: "assets/icons/import-icon.svg", label: "Import Content" },
              { icon: "assets/icons/export-icon.svg", label: "Export Posts" },
              { icon: "assets/icons/bulk-icon.svg", label: "Bulk Actions" },
            ].map((action, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-3 text-sm bg-[#F7FBF7] hover:bg-gray-100 transition p-2 rounded"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-full">
                  <img
                    src={action.icon}
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                </div>
                <span className="text-[#374151]">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter Posts */}
        <div className="mt-8">
          <h2 className="text-primary font-medium text-lg mb-4">
            Filter Posts
          </h2>
          <div className="space-y-2">
            <button className="w-full text-left text-sm text-secondary hover:text-green-600 transition p-2 rounded">
              All Posts
            </button>
            <button className="w-full text-left text-sm text-[#4B5563] hover:text-green-600 transition p-2 rounded">
              Published Only
            </button>
            <button className="w-full text-left text-sm text-[#4B5563] hover:text-green-600 transition p-2 rounded">
              Drafts Only
            </button>
            <button className="w-full text-left text-sm text-[#4B5563] hover:text-green-600 transition p-2 rounded">
              Recent Posts
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-medium text-primary">Blog Posts</h1>
            <p className="text-sm text-[#4B5563]">
              Manage your blog content and publications
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-10 pr-4 py-2 rounded-lg border border-[#D1D5DB] text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <button className="px-4 py-2 text-sm bg-[#EFEFEF] rounded border border-[#D1D5DB] transition">
              All Categories
            </button>
          </div>
        </div>

        {/* Blog Post Card */}
        <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] flex flex-col lg:flex-row lg:items-start">
          {/* Image */}
          <img
            src="assets/images/blog-img.jpg"
            alt="Post"
            className="w-20 h-20 rounded object-cover mr-4"
          />

          {/* Content */}
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-15">
              <h2 className="text-primary font-medium text-lg">
                The Art of Storytelling: Crafting Compelling Narratives
              </h2>
              <span className="text-xs bg-[#10B981] text-white px-3 py-1 rounded-full mx-0 lg:mx-16">
                Published
              </span>
            </div>
            <p className="text-sm text-[#4B5563]">
              Learn the fundamental techniques that make stories memorable and
              engaging, from character development to plot structure...
            </p>
            <div className="flex items-center text-xs text-[#6B7280] space-x-4 mt-1">
              <span>Writing</span>
              <span>• March 9,</span>
              <span>• 18 comments</span>
            </div>
          </div>

          {/* Icons */}
          <div className="space-x-5 mt-4 ms-0 md:mt-0 self-start">
            <button>
              <img
                src="assets/icons/view-icon.svg"
                alt="Delete"
              />
            </button>
            <button>
              <img
                src="assets/icons/edit-icon.svg"
                alt="Delete"
              />
            </button>
            <button>
              <img
                src="assets/icons/delete-icon.svg"
                alt="Delete"
              />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthorContent;
