import React from "react";
import Navbar from "../components/Navbar";
import CategoriesHeader from "../components/CategoriesHeader";
import CategoriesSearch from "../components/CategoriesSearch";
import Footer from "../components/Footer";
import CategoryGrid from "../components/CategoryGrid";

const categoryData = [
  {
    title: "Technology",
    posts: 42,
    followers: "1.2k",
    tags: ["Trending"],
  },
  {
    title: "Lifestyle",
    description:
      "Discover tips for sustainable living, wellness, productivity, and creating a balanced life.",
    posts: 38,
    followers: "986",
    tags: ["Trending", "Popular"],
  },
  {
    title: "Creative Writing",
    description:
      "Master the art of storytelling, poetry, fiction, and creative expression through words.",
    posts: 29,
    followers: "866",
    tags: ["Popular"],
  },
  {
    title: "Business",
    posts: 25,
    followers: "729",
  },
  {
    title: "Design",
    description: "UI/UX design principles, graphic design trends, and creative inspiration for visual storytellers.",
    posts: 34,
    followers: "465",
  },
  {
    title: "Health & Wellness",
    posts: 23,
    followers: "541",
    tags: ["New"],
  },
  {
    title: "Education",
    description: "Learning resources, study techniques, career development, and educational insights.",
    posts: 16,
    followers: "298",
  },
  {
    title: "Photography",
    posts: 14,
    followers: "312",
  },
  {
    title: "Food & Cooking",
    posts: 21,
    followers: "684",
  },
];

const Categories = () => {
  return (
    <>
      <Navbar />
      <CategoriesHeader />
      <CategoriesSearch />
      <CategoryGrid categories={categoryData} />

      <Footer />
    </>
  );
};

export default Categories;
