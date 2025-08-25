import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categories from "./pages/Categories";
import AdminDashboard from "./pages/AdminDashboard";
import BlogDetail from "./pages/BlogDetail";
import AuthorDashboard from "./pages/AuthorDashboard";
import FeaturedAuthors from "./pages/FeaturedAuthors";
import Write from "./pages/Write";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/categories",
      element: <Categories />,
    },
    {
      path: "/authors",
      element: <FeaturedAuthors />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/admin",
      element: <AdminDashboard />,
    },
    {
      path: "/blog-detail",
      element: <BlogDetail />,
    },
    {
      path: "/author-dashboard",
      element: <AuthorDashboard />,
    },
    {
      path: "/write",
      element: <Write />,
    },
    // {
    //   path: "*",
    // element: <NotFound />,
    // },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
