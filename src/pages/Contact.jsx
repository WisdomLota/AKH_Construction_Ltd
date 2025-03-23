import React, { useState } from 'react';
import NavBar  from "../components/NavBar"
import FooterBox from '../components/FooterBox'
import customLogo from "../assets/AKHRealtyLogoRed.png";
import customFooterLogo from "../assets/AKHRealtyLogo.png";
import blueDirectArrow from '../assets/blueDirectArrow.svg';
import customMenu from "../assets/hamMenuRed.svg";
import mail from "../assets/emailImg.svg";
import whatsapp from "../assets/whatsAppImg.svg";
import phone from "../assets/phoneImg.svg";

const Contact = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Reset errors
      setEmailError('');
      setMessageError('');
      
      // Validate inputs
      let isValid = true;
      
      if (!email) {
        setEmailError('Email address is required');
        isValid = false;
      } else if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address');
        isValid = false;
      }
      
      if (!message) {
        setMessageError('Message is required');
        isValid = false;
      }
      
      if (isValid) {
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          // console.log('Email:', email);
          // console.log('Message:', message);
          setEmail('');
          setMessage('');
          
          // Reset success message after 3 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        }, 1000);
      }

    };

  return (
    <div>
        {/*Navigation*/}
        <NavBar logo={customLogo} menu={customMenu} shadow='shadow-xs'/>

        <div className="bg-gray-50 min-h-screen p-16 md:p-24 lg:p-32 text-[#822e27]">
          <div className="mx-auto items-center mt-12 space-y-12">
            {/* Left Column */}
            <div className="flex flex-col md:flex-row justify-evenly space-x-8 ">
              <div className='w-1/2 md:flex md:justify-center md:items-center mb-2'>
                <h1 className="text-4xl md:text-6xl font-semibold">CONTACT</h1>
              </div>

              <div className='lg:w-1/2 xl:mr-24'>
                <h2 className="text-2xl font-medium mb-2">Feel Free To Reach Out;</h2>

                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div >
                      <img src={mail} alt="email" />
                    </div>
                    <div>
                      <p className="text-lg font-medium ">Email Address</p>
                      <p >selsodeno@yahoo.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div >
                      <img src={whatsapp} alt="whatsapp" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Whatsapp Number</p>
                      <p>+234 803 703 7734</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div>
                      <img src={phone} alt="phone" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Mobile Number</p>
                      <p >+234 803 703 7734</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="flex flex-col md:flex-row justify-evenly space-x-8 mt-20 xl:mr-32">
              
              <div className="lg:w-1/2 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-medium leading-tight lg:-mt-12 mb-4 lg:px-40">
                  You Could Also Just Send Us a Direct Message;
                </h2>
              </div>

              <form onSubmit={handleSubmit} className='lg:w-1/2 text-[#822e27]'>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className={`w-full p-4 border rounded-bl-4xl placeholder-[#822e27] border-[#822e27] focus:outline-none ${emailError ? 'border-red-300' : ''}`}
                  />
                  {emailError && <p className="mt-1 text-red-500 text-sm">{emailError}</p>}
                </div>
        
                <div className="mb-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    rows={6}
                    className={`w-full p-4 border rounded-bl-4xl placeholder-[#822e27] border-[#822e27] focus:outline-none ${messageError ? 'border-red-300' : ''}`}
                  />
                  {messageError && <p className="mt-1 text-red-500 text-sm">{messageError}</p>}
                </div>
        
                {/* Submit button */}
                <div className="flex justify-end items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="text-[#6ca2e3] flex group items-center justify-center cursor-pointer"
                    >
                        <span className="mr-4 font-medium border-b-2 border-[#6ca2e3] pb-1">SEND</span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <img src={blueDirectArrow} alt="arrow-direction" className="w-full"/>
                        </div>
        
                    </button>
                </div>
                
                {isSubmitted && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-bl-4xl">
                    Your message has been sent successfully!
                  </div>
                )}
               </form>

              </div>
            </div>
          </div>
        {/*Footer*/}
        <FooterBox mainBgColor='bg-[#822e27]' mainTextColor='text-white' footerTextColor='text-[#822e27]' footerBgColor='bg-white' logo={customFooterLogo}/>
    </div>

  )
}

export default Contact