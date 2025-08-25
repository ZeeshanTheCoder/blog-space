import React from "react";
import profileImage from "/assets/icons/user-icon.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const authors = [
  {
    id: 1,
    name: "Marcus Rodriguez",
    title: "Environmental Advocate",
    stats: "12 articles • 1.2k followers",
    image: profileImage,
  },
  {
    id: 2,
    name: "Sofia Patel",
    title: "Tech Columnist",
    stats: "8 articles • 980 followers",
    image: profileImage,
  },
  {
    id: 3,
    name: "Liam Chen",
    title: "Health & Wellness Writer",
    stats: "15 articles • 2.1k followers",
    image: profileImage,
  },
  {
    id: 4,
    name: "Amira Khan",
    title: "Education Blogger",
    stats: "10 articles • 870 followers",
    image: profileImage,
  },
  {
    id: 5,
    name: "Daniel Lee",
    title: "Science Journalist",
    stats: "20 articles • 3.4k followers",
    image: profileImage,
  },
  {
    id: 6,
    name: "Elena Garcia",
    title: "Travel Enthusiast",
    stats: "14 articles • 1.9k followers",
    image: profileImage,
  },
  {
    id: 7,
    name: "Noah Brown",
    title: "Finance Analyst",
    stats: "9 articles • 1.1k followers",
    image: profileImage,
  },
  {
    id: 8,
    name: "Maya Singh",
    title: "Food Critic",
    stats: "18 articles • 2.7k followers",
    image: profileImage,
  },
  {
    id: 9,
    name: "Oliver Wright",
    title: "AI & Ethics Writer",
    stats: "11 articles • 1.6k followers",
    image: profileImage,
  },
];

// Individual card component
const UserProfileCard = ({ name, title, stats, image }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-6 text-center overflow-hidden m-4 sm:m-0">
      <div className="w-10 h-10 mx-auto rounded-full bg-[#98CF98] flex items-center justify-center mb-4">
        <img src={image} alt={name} className="w-5 h-5 rounded-full" />
      </div>

      <h2 className="text-lg font-normal text-[#2E5A2E]">{name}</h2>
      <p className="text-gray-600 mb-2">{title}</p>
      <p className="text-sm text-gray-500 mb-4">{stats}</p>
      <button className="bg-[#2E5A2E] text-white px-6 py-2 rounded-md hover:bg-[#244924] transition">
        Follow
      </button>
      <div className="absolute bottom-0 left-0 w-full h-[10px] bg-[linear-gradient(90deg,_#2E5A2E_0%,_#98CF98_100%)] rounded-b-xl"></div>
    </div>
  );
};

// Main section component
const FeaturedAuthors = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-10 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <p className="text-sm text-gray-500 mb-2">
              Home / <span className="text-gray-600">Authors</span>
            </p>
            <h1 className="text-primary mb-2 font-normal text-[36px] leading-[40px] align-middle">
              Featured Authors
            </h1>
            <p className="text-base text-gray-600">
              Explore profiles of leading authors and their insightful work.
            </p>
          </div>

          {/* Card Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {authors.map((author) => (
              <UserProfileCard
                key={author.id}
                name={author.name}
                title={author.title}
                stats={author.stats}
                image={author.image}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FeaturedAuthors;
