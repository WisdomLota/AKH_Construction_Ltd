import NavBar from "../components/NavBar";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import SignUp from "../components/SignUp.jsx";
import Features from "../components/RealtyFeatures.jsx";
import MidSection from "../components/MidSection.jsx";
import DevUpdates from "../components/DevUpdates.jsx";
import FAQ from "../components/FAQ.jsx";
import ContactForm from "../components/ContactForm.jsx";
import FooterBox from "../components/FooterBox.jsx";
import explorePic from "../assets/explorePic.png";
import customArrow from '../assets/directArrow.svg';
import "../styles/general.css";

const Home = () => {
  
    return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div style={{backgroundImage: `url(${explorePic})`, backgroundSize: "cover", backgroundPosition: "center"}} className="h-fit border-bottom-left-rounded w-full">
        {/* Navigation */}
        <NavBar textColor="text-white" borderColor="border-white"/>

        {/* Hero Section */}
        <Hero/>
      </div>

      {/* About Section */}
      <About/>

      {/* Development Updates Section */}
      <DevUpdates />

      {/* SignUp Section */}
      <SignUp/>

      {/* Virtual Realty, Trending Realty and Become Home Owner Section */}
      <MidSection/>

      {/* Interactive FAQ section */}
      <FAQ/>

      {/* Contact Form for more questions */}
      <ContactForm bgColor="bg-[#822e27]" textColor="text-white" bordersColor="border-white" arrow={customArrow} btnText="text-white" btnLine="border-white"/>

      {/* Footer */}
      <FooterBox className="w-full"/>
      
    </div>
    )
}

export default Home;