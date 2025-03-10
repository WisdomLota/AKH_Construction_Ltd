import NavBar from "../components/NavBar";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import SignUp from "../components/SignUp.jsx";
import Features from "../components/Features.jsx";
import MidSection from "../components/MidSection.jsx";
import FAQ from "../components/FAQ.jsx";
import ContactForm from "../components/ContactForm.jsx";
import explorePic from "../assets/explorePic.png";
import "../styles/general.css";

const Home = () => {
    return (
    <div className="min-h-screen flex flex-col">
      <div style={{backgroundImage: `url(${explorePic})`, backgroundSize: "cover", backgroundPosition: "center"}} className="h-fit border-bottom-left-rounded">
        {/* Navigation */}
        <NavBar/>

        {/* Hero Section */}
        <Hero/>
      </div>

      {/* About Section */}
      <About/>

      {/* Features Section */}
      <Features/>

      {/* SignUp Section */}
      <SignUp/>

      {/* Virtual Realty, Trending Realty and Become Home Owner Section */}
      <MidSection/>

      {/* Interactive FAQ section */}
      <FAQ/>

      {/* Interactive FAQ section */}
      <ContactForm/>
      
    </div>
    )
}

export default Home;