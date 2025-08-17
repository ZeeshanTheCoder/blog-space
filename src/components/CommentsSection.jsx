import { FiHeart, FiUser } from "react-icons/fi";

const CommentsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
      <h3 className="text-green-900 font-semibold mb-4">Comments</h3>

      {/* New Comment */}
      <div className="flex items-start gap-3 mb-4">
        <div className="flex">
          <div className="w-12 h-12 bg-[#98CF98] rounded-full flex items-center justify-center text-green-800 text-xl font-semibold">
            <img
              src="/assets/icons/users-vector.png"
              className="filter invert"
              alt=""
            />
          </div>
        </div>
        <textarea
          placeholder="Write a comment..."
          className="w-full border border-gray-300 rounded-md p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={3}
        />
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 justify-end bg-[#2E5A2E] text-white rounded hover:bg-green-800 transition text-sm mb-6">
          Post Comment
        </button>
      </div>

      {/* Existing Comments */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 bg-[#98CF98] rounded-full flex items-center justify-center text-green-800 text-xl font-semibold">
          <img
            src="/assets/icons/users-vector.png"
            className="filter invert"
            alt=""
          />
        </div>
        <div className="flex flex-col bg-[#F9FAFB] px-5 py-4 w-full rounded-lg justify-start">
          <span className="text-[#2E5A2E]">Sara Williams</span>
          <p className="text-sm text-gray-700">
            This article was incredibly helpful! I loved the structure.
          </p>
          <div className="flex justify-start text-xs text-[#6B7280] mt-1 items-center gap-5">
            <div className="flex items-center gap-1 cursor-pointer">
              <FiHeart /> 156
            </div>

            <button className="cursor-pointer">Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
