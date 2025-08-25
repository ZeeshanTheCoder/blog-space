import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white w-full px-4 py-6 border-gray-200">
        <nav className="flex flex-col lg:mx-20">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-[#4B5563]">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="text-gray-400">{">"}</span>
            <span className="text-primary">About</span>
          </div>

          {/* Title */}
          <h1 className="mt-2 text-primary  text-2xl sm:text-3xl">
            About BlogSpace
          </h1>
        </nav>
      </section>

      {/* About Us Card */}
      <div className="bg-white border-gray-200 rounded-xl shadow-md p-6 sm:mx-28 mx-5  my-5 relative overflow-hidden">
        <h3 className="text-[#2E5A2E] font-semibold mb-2">About Us</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          BlogSpace is a people-first publishing platform built for creators,
          thinkers, and readers alike. More than just blogging, it’s a space
          where ideas thrive, communities grow, and knowledge flows freely. We
          believe in the power of community, fostering meaningful interaction
          and support between writers and readers. Respecting creator ownership,
          we give you full control over your content. Celebrating diverse voices
          and topics, BlogSpace supports your growth—whether expanding your
          audience or honing your craft. Always evolving, we listen closely to
          our users to continuously improve the platform and your experience.
        </p>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[linear-gradient(90deg,_#2E5A2E_0%,_#98CF98_100%)] rounded-b-xl"></div>
      </div>

      {/* Our Mission Card */}
      <div className="bg-white border-gray-200 rounded-xl shadow-md p-6 sm:mx-28 mx-5 my-5 relative overflow-hidden">
        <h3 className="text-[#2E5A2E] font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          BlogSpace is a platform where stories and ideas find their voice,
          inspiring, educating, and connecting people from all walks of life. We
          empower every writer to express their ideas freely and authentically
          while building a diverse, global community for collaboration and
          learning. Committed to quality over quantity, we highlight meaningful
          content that sparks conversation and fuels curiosity. Beyond
          publishing, BlogSpace offers a clean, distraction-free experience that
          makes creating and sharing content simple—so you can focus on what
          matters most: your words.
        </p>

        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[linear-gradient(90deg,_#2E5A2E_0%,_#98CF98_100%)] rounded-b-xl"></div>
      </div>

      {/* What We Offer Card */}
      <div className="bg-white border-gray-200 rounded-xl shadow-md p-6 sm:mx-28 mx-5 my-5 relative overflow-hidden">
        <h3 className="text-[#2E5A2E] font-semibold mb-2">What We Offer</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          At BlogSpace, we’re more than a publishing platform—we provide a
          complete ecosystem for content creators. Whether you’re writing,
          reading, or growing an audience, our clean, distraction-free editor
          helps you focus on your ideas. Engage with your followers through
          real-time feedback and shareable posts, while easy-to-understand
          analytics help you track what resonates. Connect and collaborate with
          a vibrant community of writers, and explore monetization options to
          turn your passion into profit.
        </p>

        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[linear-gradient(90deg,_#2E5A2E_0%,_#98CF98_100%)] rounded-b-xl"></div>
      </div>

      {/* Card: Our Vision */}
      <div className="bg-white border-gray-200 rounded-xl shadow-md p-6 sm:mx-28 mx-5 my-5 relative overflow-hidden">
        <h3 className="text-[#2E5A2E] font-semibold mb-2">Our Vision</h3>
        <p className="text-gray-600 leading-relaxed">
          We envision BlogSpace as a vibrant global community where meaningful
          ideas inspire real change. Our goal is to create a platform where
          authentic storytelling transcends borders, allowing every story to
          find its reader and spark thoughtful conversations. We strive to
          cultivate an environment where creativity thrives and every writer
          feels valued and empowered to share their unique voice.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[linear-gradient(90deg,#2E5A2E_0%,#98CF98_100%)] rounded-b-xl"></div>
      </div>

      {/* Card: Why BlogSpace */}
      <div className="bg-white border-gray-200 rounded-xl shadow-md p-6 sm:mx-28 mx-5 my-5 relative overflow-hidden">
        <h3 className="text-[#2E5A2E] font-semibold mb-2">Why BlogSpace?</h3>
        <p className="text-gray-600 leading-relaxed">
          BlogSpace offers a minimal and focused writing experience designed to
          help creators concentrate on what truly matters—their words. We
          believe in fair visibility for all writers, ensuring that every voice
          has an equal opportunity to be heard. Our platform is built around
          authentic, community-led content that encourages genuine connections
          between authors and readers.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[linear-gradient(90deg,#2E5A2E_0%,#98CF98_100%)] rounded-b-xl"></div>
      </div>

      {/* Card: Built for Writers */}
      <div className="bg-white border-gray-200 rounded-xl shadow-md p-6 sm:mx-28 mx-5 my-5 relative overflow-hidden">
        <h3 className="text-[#2E5A2E] font-semibold mb-2">Built for Writers</h3>
        <p className="text-gray-600 leading-relaxed">
          BlogSpace is designed with writers in mind, offering intuitive tools
          that make the process of crafting, editing, and publishing seamless
          and enjoyable. Whether you're a casual blogger, a professional
          journalist, or somewhere in between, our platform adapts to your
          needs. We provide the flexibility to express your creativity fully,
          including multimedia integration and customizable layouts to showcase
          your work exactly the way you want.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[linear-gradient(90deg,#2E5A2E_0%,#98CF98_100%)] rounded-b-xl"></div>
      </div>

      {/* Card: Open to All */}
      <div className="bg-white border-gray-200 rounded-xl shadow-md p-6 sm:mx-28 mx-5 my-5 relative overflow-hidden">
        <h3 className="text-[#2E5A2E] font-semibold mb-2">Open to All</h3>
        <p className="text-gray-600 leading-relaxed">
          We believe that great ideas come from everywhere, which is why
          BlogSpace is open to creators from all walks of life. Our platform
          fosters a welcoming and inclusive environment where diverse voices can
          be heard without barriers. Whether you’re an emerging writer or an
          established author, you’ll find a respectful community that celebrates
          individuality and encourages authentic self-expression.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[linear-gradient(90deg,#2E5A2E_0%,#98CF98_100%)] rounded-b-xl"></div>
      </div>

      <Footer />
    </>
  );
};

export default About;
