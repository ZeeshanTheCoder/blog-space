import React, { useState } from 'react';
import { FiSearch, FiGrid, FiList } from 'react-icons/fi';

const CategoriesSearch = () => {
  const [view, setView] = useState('grid');

  return (
    <div className="bg-[#F9FAFB] border border-[#E5E7EB] w-full px-4 py-3 shadow-sm rounded-md">
      <div className="flex flex-col lg:mx-20 sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
        {/* Left Section: Search + Count */}
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FiSearch />
            </span>
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-700"
            />
          </div>
          {/* Category Count */}
          <span className="text-sm text-gray-600 hidden sm:inline-block">
            12 categories found
          </span>
        </div>

        {/* Right Section: Sort + Toggle */}
        <div className="flex items-center space-x-4 justify-between sm:justify-end w-full sm:w-auto">
          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Sort by</label>
            <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-green-700">
              <option>Popular</option>
              <option>Newest</option>
              <option>Name (A-Z)</option>
            </select>
          </div>

          {/* View Toggle Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-md border ${
                view === 'grid'
                  ? 'bg-primary text-white'
                  : 'bg-white border-primary text-primary'
              }`}
            >
              <FiGrid size={16} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-md border ${
                view === 'list'
                  ? 'bg-primary text-white'
                  : 'bg-white border-primary text-primary'
              }`}
            >
              <FiList size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSearch;
