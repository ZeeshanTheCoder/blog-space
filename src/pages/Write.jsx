import React, { useState, useCallback, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, NavLink } from "react-router-dom";
import "./Editor.css";

const PRIMARY_GREEN = "#2E5A2E";
const SECONDARY_GREEN = "#98CF98";

const categories = [
  "Technology",
  "Health",
  "Education",
  "Lifestyle",
  "Business",
  "Entertainment",
];

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [readingTime, setReadingTime] = useState(1);

  const maxTitleLength = 100;

  // Simple reading time calculation (1 min per 200 words)
  useEffect(() => {
    const plainText = content.replace(/<[^>]+>/g, ""); // Remove HTML tags
    const wordCount = plainText.trim().split(/\s+/).length; // Count words
    const time = Math.max(1, Math.ceil(wordCount / 200)); // Reading time in minutes
    setReadingTime(time);
  }, [content]);

  const handleTagInputKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleImageDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (
      file &&
      (file.type === "image/png" || file.type === "image/jpeg") &&
      file.size <= 9 * 1024 * 1024
    ) {
      const preview = URL.createObjectURL(file);
      setFeaturedImage({ file, preview });
    } else {
      alert("Please upload a PNG or JPG image up to 9MB.");
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "image/png" || file.type === "image/jpeg") &&
      file.size <= 9 * 1024 * 1024
    ) {
      const preview = URL.createObjectURL(file);
      setFeaturedImage({ file, preview }); // <-- wrapped in object
    } else {
      alert("Please upload a PNG or JPG image up to 9MB.");
    }
  };

  return (
    <>
      <nav className="w-full bg-white py-3 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <div className="text-primary text-[24px] leading-8 font-[pacifico]">
              BlogSpace
            </div>
          </NavLink>
          {/* Back to Home link */}
          <Link
            to="/"
            className="flex items-center text-primary text-sm hover:underline"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
        {/* Title and category + reading time */}
        <div className="flex-1 relative">
          <input
            type="text"
            className="rounded-md text-gray-400 placeholder-gray-400 border-none text-3xl focus:outline-none"
            placeholder="Enter your article title"
            maxLength={maxTitleLength}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex justify-between items-center m-1">
            <div className="text-gray-400">Title</div>
            <div className="top-1.5 right-3 text-sm text-gray-400 select-none">
              {title.length}/{maxTitleLength}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex flex-col flex-1">
            <label htmlFor="" className="text-[#374151] mb-1">
              Category
            </label>
            <select
              className="border border-[#E5E7EB] bg-[#F9FAFB] rounded-2xl p-3 text-[#6B7280] max-w focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col flex-1">
            <label htmlFor="" className="text-[#374151] mb-1">
              Reading Time
            </label>
            <div className="flex gap-2 border border-[#E5E7EB] bg-[#F9FAFB] rounded-2xl p-3 max-w text-[#6B7280] focus:outline-none">
              <img src="/assets/icons/time-vector.svg" alt="" />
              <span className="text-[#4B5563]"> {readingTime} min read</span>
            </div>
          </div>
        </div>

        {/* React Quill Editor */}
        <div className="flex flex-col">
          <label htmlFor="" className="text-[#374151] mb-1">
            Content
          </label>
          <ReactQuill
            id="content"
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Start writing your article..."
            modules={{
              toolbar: {
                container: [
                  ["bold", "italic", "underline"], // group 1
                  [{ header: [1, 2, 3, false] }], // group 2
                  [{ list: "ordered" }, { list: "bullet" }, "blockquote"], // group 3
                  ["link"], // group 4
                ],
                handlers: {},
              },
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "list",
              "bullet",
              "blockquote",
              "link",
            ]}
            className="min-h-[300px] bg-white rounded-md"
          />
        </div>

        {/* Featured Image uploader */}
        <div
          onDrop={handleImageDrop}
          onDragOver={(e) => e.preventDefault()}
          className="mt-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-10 cursor-pointer text-gray-400 hover:border-primary transition"
          onClick={() => document.getElementById("featuredImageInput").click()}
        >
          {featuredImage ? (
            <div className="text-center">
              <p className="text-gray-700 mb-2 font-semibold">
                Selected Image:
              </p>
              <img
                src={featuredImage.preview}
                alt="Preview"
                className="mx-auto mb-2 max-h-60 rounded-md shadow"
              />
              <img src={featuredImage} width={"100"} height={"auto"} alt="" />
              <p className="text-sm text-gray-600">{featuredImage.name}</p>
            </div>
          ) : (
            <>
              <div className="bg-[#F3F4F6] p-4 rounded-full mb-3">
                <img src="/assets/icons/image-icon.svg" alt="" />
              </div>
              <p className="mb-1 font-semibold">
                Drag and drop an image here, or click to browse
              </p>
              <p className="text-sm">PNG, JPG up to 9MB</p>
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="featuredImageInput"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Tags input */}
        <div className="mt-2">
          <input
            type="text"
            placeholder="Add tags (press Enter to add)"
            className="border border-[#E5E7EB] rounded-2xl p-3 text-[#6B7280] max-w focus:outline-none w-full focus:ring-2 focus:ring-[#E5E7EB]"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagInputKeyDown}
          />

          <div className="flex flex-wrap mt-2 gap-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-[#98CF98] text-primary px-3 py-1 rounded-full flex items-center space-x-2 text-sm font-medium select-none"
              >
                <span>{tag}</span>
                <button
                  onClick={() => removeTag(tag)}
                  className="text-[#2E5A2E] hover:text-primary"
                  aria-label={`Remove tag ${tag}`}
                  type="button"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="block sm:space-x-4 justify-start sm:flex md:justify-between s ">
          <button
            className="px-4 py-2 flex gap-2 border border-[#D1D5DB] rounded-md text-gray-700 hover:bg-gray-100 transition"
            onClick={() => alert("Draft saved is coming soon!")}
          >
            <img src="/assets/icons/save.svg" alt="" />
            Save Draft
          </button>
          <button
            className={`px-4 py-2 border flex gap-2 border-[#2E5A2E] rounded-md text-primary hover:bg-primary hover:text-white transition`}
            onClick={() => alert("Preview mode is coming soon!")}
          >
            <img
              src="/assets/icons/preview.svg"
              className="hover:invert"
              width="15"
              height="15"
              alt=""
            />
            Preview
          </button>
          <NavLink to="/">
            <button
              className="px-4 py-2 bg-primary hover:bg-[#245124] flex gap-2 text-white rounded-md transition"
              onClick={() => alert("Article published!")}
            >
              <img
                src="/assets/icons/publish-article.svg"
                width="15"
                height="15"
                alt=""
              />
              Publish Article
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Write;
