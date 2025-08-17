import React from "react";

const BlogBanner = () => {
  return (
    <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
      <img
        src="/assets//images/blog-banner.jpg"
        alt="Blog Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BlogBanner;
