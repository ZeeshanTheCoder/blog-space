import React from "react";

const CategoriesHeader = () => {
  return (
    <section className="bg-white w-full px-4 py-6 border-b border-gray-200">
      <nav className="flex flex-col lg:mx-20">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-[#4B5563]">
          <a href="/" className="hover:underline">
            Home
          </a>
          <span className="text-gray-400">{'>'}</span>
          <span className="text-primary">Categories</span>
        </div>

        {/* Title */}
        <h1 className="mt-2 text-primary  text-2xl sm:text-3xl">
          Explore Categories
        </h1>
      </nav>
    </section>
  );
};

export default CategoriesHeader;
