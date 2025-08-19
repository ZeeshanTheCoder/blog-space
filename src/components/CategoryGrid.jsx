import React from "react";
import CategoryCard from "./CategoryCard"; // Adjust path as needed
import {
  FaCode,
  FaLeaf,
  FaPenNib,
  FaBriefcase,
  FaPalette,
} from "react-icons/fa";

const iconMap = {
  Technology: "/assets/icons/technology-vector.png",
  Lifestyle: "/assets/icons/lifestyle-vector.png",
  "Creative Writing": "/assets/icons/writing-vector.png",
  Business: "/assets/icons/business-vector.png",
  Design: "/assets/icons/design-vector.png",
  "Health & Wellness": "/assets/icons/health-and-wellness-vector.png",
  Education: "/assets/icons/education-vector.png",
  Photography: "/assets/icons/photography-vector.png",
  "Food & Cooking": "/assets/icons/food-vector.png",
};

const CategoryGrid = ({ categories }) => {
  return (
    <div className=" bg-[#F9FAFB] p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-25 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
            posts={category.posts}
            followers={category.followers}
            icon={iconMap[category.title]}
            badge={category.tags?.[0]} // Show only the first tag (e.g., "Trending")
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
