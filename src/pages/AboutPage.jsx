import React from 'react'
import NavBar from '../components/NavBar'
import FooterBox from '../components/FooterBox'
import About from '../components/About'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'
import customLogo from "../assets/AKHRealtyLogoRed.png";
import customFooterLogo from "../assets/AKHRealtyLogo.png";
import customMenu from "../assets/hamMenuRed.svg";

const AboutPage = () => {
  return (
    <div>
        {/**Navigation */}
        <NavBar logo={customLogo} shadow='shadow-md' menu={customMenu}/>

        <div className="bg-white min-h-screen p-8 md:p-12 text-[#822e27]">
            <div className='mt-8'>
                {/**About Message */}
                <About/>

                {/**FAQ section */}
                <div className='xl:-ml-20'>
                <FAQ/>
                </div>

                {/**More questions? */}
                <div className='xl:-ml-20'>
                <ContactForm />
                </div>
            </div>
        </div>

        {/**Footer */}
        <FooterBox mainBgColor='bg-[#822e27]' mainTextColor='text-white' footerBgColor='bg-white' footerTextColor='text-[#822e27]' logo={customFooterLogo}/>
    </div>
  )
}

export default AboutPage