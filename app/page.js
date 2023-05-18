import Navbar from "@/components/Common/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Qualification from "@/components/Qualification";
import TimeLine from "@/components/TimeLine";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/Common/BackToTop";

const Home = () => {
  return (
    <main className="relative z-0 bg-gradient-to-r from-lblack via-black to-xlblack">
      <Navbar />
      <div className="bg-hero-banner bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Stats />
      <Qualification />
      <TimeLine />
      <Contact />
      <div className="bg-hero-banner bg-cover bg-no-repeat bg-center">
        <Footer />
      </div>
      <BackToTop />
    </main>
  );
};

export default Home;
