import React, { useState } from 'react';
import defaultArrow from '../assets/blueDirectArrow.svg';


const ContactForm = ({
  bgColor = 'bg-white', 
  textColor = 'text-[#822e27]', 
  bordersColor = 'border-[#822e27]',
  arrow = defaultArrow,
  btnLine = 'border-[#6ca2e3]',
  btnText = 'text-[#6ca2e3]'}) => {

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
    <div className={`flex flex-col md:flex-row w-full mx-auto lg:p-24 p-8 ${bgColor} ${textColor} min-h-screen md:items-center md:justify-center`}>
      {/* Left section */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex items-center">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight xl:ml-24 xl:p-0 p-4">
          STILL HAVE MORE QUESTIONS FOR US?
        </h1>
      </div>

      {/* Right section */}
      <div className="md:w-1/2 md:flex md:flex-row justify-center items-center p-4">
        <div className="mb-6">
          <h2 className="text-3xl md:text-3xl font-medium mb-8">
            Feel Free to send us a message
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className={`w-full p-4 border rounded-bl-4xl ${bordersColor} focus:outline-none ${emailError ? 'border-red-300' : ''}`}
              />
              {emailError && <p className="mt-1 text-red-500 text-sm">{emailError}</p>}
            </div>

            <div className="mb-6">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows={6}
                className={`w-full p-4 border rounded-bl-4xl ${bordersColor} focus:outline-none ${messageError ? 'border-red-300' : ''}`}
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
  );
};

export default ContactForm;