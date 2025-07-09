import React, { useState } from 'react';
import NavBar  from "../components/NavBar"
import FooterBox from '../components/FooterBox'
import customLogo from "../assets/AKHRealtyLogoRed.png";
import customFooterLogo from "../assets/AKHRealtyLogo.png";
import defaultArrow from '../assets/blueDirectArrow.svg';
import customMenu from "../assets/hamMenuRed.svg";
import mail from "../assets/emailImg.svg";
import whatsapp from "../assets/whatsAppImg.svg";
import phone from "../assets/phoneImg.svg";

const Contact = ({
  arrow = defaultArrow,
  btnLine = 'border-[#6ca2e3]',
  btnText = 'text-[#6ca2e3]'
}) => {

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
        <NavBar logo={customLogo} menu={customMenu} shadow='shadow-md'/>

        <div className="bg-gray-50 min-h-screen p-16 md:p-24 lg:p-32 text-[#822e27]">
          <div className="mx-auto items-center mt-12 space-y-12">
            {/* Left Column */}
            <div className="flex flex-col md:flex-row justify-evenly space-x-8 ">
              <div className='w-1/2 md:flex md:justify-center md:items-center mb-2'>
                <h1 className="text-6xl md:text-8xl font-semibold mb-4">CONTACT</h1>
              </div>

              <div className='lg:w-1/2'>
                <h2 className="text-2xl font-medium mb-12">Feel Free To Reach Out;</h2>

                <div className="space-y-12">
                  <div className="flex items-center space-x-4">
                    <div >
                      <img src={mail} alt="email" />
                    </div>
                    <div>
                      <p className="text-lg font-medium ">Email Address</p>
                      <p >sesedeno@yahoo.com</p>
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
            <div className="flex flex-col md:flex-row justify-evenly space-x-8 mt-40 ">
              
              <div className="lg:w-1/2 flex flex-col justify-center items-center">
                <h2 className="text-3xl md:text-5xl leading-tight font-semibold lg:-mt-12 mb-4 lg:px-12">
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
                <div className="flex justify-end items-center pb-2 group cursor-pointer"
                onClick={handleSubmit}
                disabled={isSubmitting}>
                    <span className={`mr-4 font-medium border-b-2 w-14 pb-1 ${btnLine} ${btnText}`}>SEND</span>
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      <img src={arrow} alt="arrow-direction" />
                    </div>
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