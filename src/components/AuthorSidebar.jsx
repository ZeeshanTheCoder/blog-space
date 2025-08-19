const AuthorSidebar = () => {
  return (
    <aside className="flex flex-col gap-5">
      {/* Author Bio */}
      <div className="max-w-sm bg-white rounded-xl shadow-md p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-green-800 text-xl font-semibold">
            <img
              src="/assets/icons/users-vector.png"
              className="filter invert"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-lg text-primary">
              Emma Thompson
            </h2>
            <p className="text-sm text-gray-500">Creative Writing Coach</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          Emma is a passionate creative writing coach with over years of
          experience helping writers find their voice and craft compelling
          narratives. She holds an MFA in Creative Writing and has published
          numerous short stories and articles.
        </p>
        <button className="flex bg-green-900 text-white rounded px-4 py-2 hover:bg-green-700 transition">
          Follow Emma
        </button>
        <p className="text-[#4B5563] text-xs">
          18 articles &bull; 2.4k followers
        </p>
      </div>

      {/* Related Articles */}
      <div className="max-w-sm bg-white rounded-xl shadow-md p-6 space-y-4">
        <h4 className="text-green-900 font-semibold mb-2">Related Articles</h4>
        <ul className="text-sm text-green-800 list-disc pl-5 space-y-1">
          <li>Mastering Character Development</li>
          <li>Plot Structure Fundamentals</li>
          <li>How to Hook Your Readers</li>
        </ul>
      </div>
    </aside>
  );
};

export default AuthorSidebar;
