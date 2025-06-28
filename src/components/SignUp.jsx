import React, { useState } from 'react';
import blueDirectArrow from '../assets/blueDirectArrow.svg';
const SignUp = () => {
  const [forlgata, setForlgata] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validate = () => {
    const newErrors = {};
    
    if (!forlgata.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!forlgata.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\+?[0-9\s\-()]{8,20}$/.test(forlgata.mobileNumber)) {
        newErrors.mobileNumber = 'Please enter a valid mobile number';
    }
    
    if (!forlgata.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(forlgata.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForlgata({
      ...forlgata,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validate()) {
      //send the data to your backend here
      console.log('Form submitted successfully', forlgata);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setForlgata({
          fullName: '',
          mobileNumber: '',
          emailAddress: ''
        });
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }, 1000);
    }
    
    setIsSubmitting(false);
  };
  
  return (
    <div className="flex flex-col lg:flex-row mx-auto overflow-hidden min-h-screen">
      {/* Left section*/}
      <div className="bg-white p-12 lg:p-24 lg:w-1/2 flex flex-col justify-center xl:ml-24">
        <h1 className="text-5xl lg:text-8xl font-semibold mb-6 text">SIGN UP</h1>
        <p className="text mb-2 font-medium">
          Be the first to know about new homes with AKHCON Realty! Sign
          up for our waitlist to receive updates on stunning properties
          before they're released. Find your dream home effortlessly and
          enjoy a seamless home-buying experience.
        </p>
      </div>
      
      {/* Right section - Form */}
      <div className="bg-white p-12 lg:p-24 lg:w-1/2 flex flex-col justify-center xl:mr-24">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text">Let's Find your dream home together</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              value={forlgata.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full p-4 border rounded-bl-4xl text font-medium ${errors.fullName ? 'border-red-500' : 'border-[#822e27]'}`}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          
          <div>
            <input
              type="tel"
              name="mobileNumber"
              value={forlgata.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              className={`w-full p-4 border rounded-bl-4xl text font-medium ${errors.mobileNumber ? 'border-red-500' : 'border-[#822e27]'}`}
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>}
          </div>
          
          <div>
            <input
              type="email"
              name="emailAddress"
              value={forlgata.emailAddress}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full p-4 border rounded-bl-4xl text font-medium ${errors.emailAddress ? 'border-red-500' : 'border-[#822e27]'}`}
            />
            {errors.emailAddress && <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>}
          </div>
          
          {/* Submit button */}
          <div className="flex justify-end items-center pb-2 group cursor-pointer"
            onClick={handleSubmit}
            disabled={isSubmitting}>
                <span className="mr-4 font-medium border-b-2 text-[#6ca2e3] border-[#6ca2e3] w-20 pb-1">SIGN UP</span>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <img src={blueDirectArrow} alt="arrow-direction" />
                </div>
          </div>

          {isSubmitted && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-bl-4xl">
              Sign up successful!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;