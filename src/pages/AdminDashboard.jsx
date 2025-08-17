import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';
import DashboardOverview from '../components/DashboardOverview';

const AdminDashboard = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <AdminSidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <AdminNavbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-auto p-4 bg-gray-50">
      <DashboardOverview />
          {/* {children || <div className="text-gray-600">Welcome to Admin Dashboard</div>} */}
        </main>
      </div>

      {/* Dashboard */}
    </div>
  );
};

export default AdminDashboard;
