import React from "react";
import { FaRegEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "Technology",
    count: 42,
    icon: "/assets/icons/technology-vector.png",
  },
  { name: "Lifestyle", count: 38, icon: "/assets/icons/lifestyle-vector.png" },
  { name: "Writing", count: 29, icon: "/assets/icons/writing-vector.png" },
  { name: "Business", count: 25, icon: "/assets/icons/business-vector.png" },
  { name: "Design", count: 18, icon: "/assets/icons/design-vector.png" },
];

const authors = [
  {
    name: "Marcus Rodriguez",
    posts: 11,
    avatar: "/assets/icons/user-icon.svg",
    bio: "Environmental Advocate",
  },
  {
    name: "Emma Thompson",
    posts: 8,
    avatar: "/assets/icons/user-icon.svg",
    bio: "Creative Writing Coach",
  },
];

const LatestPosts = () => {
  return (
    <section className="bg-[#E6F4EC] min-h-screen py-10 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-8">
        <h2 className="text-3xl font-medium text-primary mb-2">Latest Posts</h2>
        <p className="text-[#374151] text-base">
          Discover fresh perspectives and inspiring stories.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Column - Blog Post Card */}
        <article className="bg-white rounded-lg shadow-md lg:w-3/5">
          <NavLink to="/blog-detail">
            <img
              src="assets/images/post-banner.jpg"
              alt="The Art of Storytelling"
              className="w-full rounded-t-lg object-cover h-[auto]"
            />
          </NavLink>

          <div className="p-6">
            <span className="inline-block bg-secondary text-primary text-xs px-3 py-1 rounded-full mb-3">
              Writing
            </span>
            <span className="inline-block text-[#6B7280] text-xs px-3 py-1 rounded-full mb-3">
              March 9,
            </span>
            <NavLink to="/blog-detail">
              <h3 className="text-xl text-primary font-medium mb-2">
                The Art of Storytelling: Crafting Compelling Narratives
              </h3>
            </NavLink>
            <p className="text-[#374151] text-sm mb-6 leading-relaxed line-clamp-2">
              Learn the fundamental storytelling skills that make stories
              memorable and engaging, from character development to plot
              structure and emotional resonance.
            </p>
            <div className="flex items-center justify-between">
              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-secondary p-3">
                  <img src={authors[1].avatar} alt={authors[1].name} />
                </div>
                <div>
                  <p className="text-primary text-sm">{authors[1].name}</p>
                  <p className="text-[#4B5563] text-xs">
                    Creative Writing Coach
                  </p>
                </div>
              </div>

              {/* Views Icon */}
              <div className="flex items-center text-gray-500 space-x-1">
                <FaRegEye />
                <span className="text-xs">1.3k</span>
              </div>
            </div>
          </div>
        </article>

        {/* Right Column - Sidebar */}
        <aside className="lg:w-2/5 flex flex-col gap-8">
          {/* Popular Categories */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-lg font-medium text-primary mb-4">
              Popular Categories
            </h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              {categories.map(({ name, count, icon }) => (
                <li key={name} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="bg-secondary rounded-full p-2 flex items-center justify-center w-8 h-8">
                      <img src={icon} alt="" />
                    </div>
                    <span>{name}</span>
                  </div>

                  <span className="text-gray-500">{count} posts</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Authors */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-lg text-gray-900 mb-4">Featured Authors</h4>
            <ul className="space-y-4">
              {authors.map((author) => (
                <li
                  key={author.name}
                  className="flex items-center justify-between"
                >
                  {/* Left side: avatar + info */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="rounded-full bg-secondary p-3">
                      <img
                        src={authors[1].avatar}
                        alt={authors[1].name}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="text-primary text-base truncate">
                        {author.name}
                      </span>
                      <span className="text-[#4B5563] text-sm truncate">
                        {author.bio} • {author.posts} posts
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 p-2">
                    <img src="assets/icons/add-user-icon.svg" alt="Add User" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Load More Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-primary hover:bg-green-800 text-white px-8 py-3 rounded-lg">
          Load More Posts
        </button>
      </div>
    </section>
  );
};

export default LatestPosts;
