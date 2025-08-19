import { FiUser, FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";

const BlogContent = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Meta Info */}
      <div className="my-4 flex">
        <span className="bg-green-100 mr-3 text-green-700 text-sm px-3 py-1 rounded-full">
          Writing
        </span>
        <p className="text-sm text-gray-500 mt-1">March 9,</p>
      </div>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-green-800 text-xl">
          <img
            src="/assets/icons/users-vector.png"
            className="filter invert"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-lg  text-green-900">
            Emma Thompson
          </h2>
          <p className="text-sm text-gray-500">Creative Writing Coach</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed space-y-6">
        <h1 className="text-3xl font-bold text-green-900">
          The Art of Storytelling: Crafting Compelling Narratives
        </h1>

        <p className="text-lg">
          Learn the fundamental storytelling skills that make stories memorable
          and engaging, from character development to plot structure and
          emotional resonance.
        </p>

        <h2 className="text-2xl font-semibold text-green-800">
          1. Understanding the Core of a Story
        </h2>
        <p>
          Every great story has a purpose. Whether it’s to entertain, inform, or
          inspire, understanding the intention behind your story helps shape its
          direction. Strong narratives are built on clear themes and messages.
        </p>

        <h2 className="text-2xl font-semibold text-green-800">
          2. Building Relatable Characters
        </h2>
        <p>
          Characters are the heart of any story. Compelling characters have
          depth, flaws, and desires. Readers connect more deeply when they see
          parts of themselves reflected in the people you create.
        </p>

        <h2 className="text-2xl font-semibold text-green-800">
          3. Crafting a Strong Plot Structure
        </h2>
        <p>
          A well-structured plot keeps your audience engaged. Use elements like
          exposition, rising action, climax, and resolution to build momentum
          and deliver satisfying outcomes.
        </p>

        <h2 className="text-2xl font-semibold text-green-800">
          4. Creating Emotional Impact
        </h2>
        <p>
          Emotion is what makes stories stick. Whether it’s joy, sorrow, fear,
          or hope — emotional resonance ensures that your audience remembers the
          message long after the story ends.
        </p>
      </div>

      {/* Footer (Tags & Reactions) */}
      <div className="container m-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="icon-1 flex gap-5">
            <div className="flex items-center gap-3">
              <FiHeart /> 156
            </div>
            <div className="flex items-center gap-3">
              <FiMessageCircle /> 24
            </div>
            <div className="flex items-center gap-3">
              <FiShare2 /> Share
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-[#374151] text-xs px-3 py-1 rounded-full">
              Storytelling
            </span>
            <span className="bg-[#F3F4F6] text-[#374151] text-xs px-3 py-1 rounded-full">
              Creative Writing
            </span>
            <span className="bg-[#F3F4F6] text-[#374151] text-xs px-3 py-1 rounded-full">
              Narrative
            </span>
            <span className="bg-[#F3F4F6] text-[#374151] text-xs px-3 py-1 rounded-full">
              Writing Tips
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
