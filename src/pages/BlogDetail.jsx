import AuthorSidebar from "../components/AuthorSidebar";
import BlogBanner from "../components/BlogBanner";
import BlogContent from "../components/BlogContent";
import CommentsSection from "../components/CommentsSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BlogDetail = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#ECF5EC]">
        <BlogBanner />
        <main className="max-w-7xl mx-auto px-4 py-8 lg:flex lg:gap-8">
          <div className="lg:w-2/3 space-y-6">
            <BlogContent />
            <CommentsSection />
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <AuthorSidebar />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
