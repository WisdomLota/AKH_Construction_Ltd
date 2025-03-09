import React, { useState } from 'react';
import blueDirectArrow from '../assets/blueDirectArrow.svg';
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\+?[0-9\s\-()]{8,20}$/.test(formData.mobileNumber)) {
        newErrors.mobileNumber = 'Please enter a valid mobile number';
    }
    
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validate()) {
      //send the data to your backend here
      console.log('Form submitted successfully', formData);
      // Resetting form 
      setFormData({
        fullName: '',
        mobileNumber: '',
        emailAddress: ''
      });
    }
    
    setIsSubmitting(false);
  };
  
  return (
    <div className="flex flex-col md:flex-row mx-auto overflow-hidden">
      {/* Left section*/}
      <div className="bg-white p-12 md:p-24 md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 text">SIGN UP</h1>
        <p className="text mb-2 font-medium">
          Be the first to know about new homes with AKHCON Realty! Sign
          up for our waitlist to receive updates on stunning properties
          before they're released. Find your dream home effortlessly and
          enjoy a seamless home-buying experience.
        </p>
      </div>
      
      {/* Right section - Form */}
      <div className="bg-white p-12 md:p-24 md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text">Let's Find your dream home together</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
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
              value={formData.mobileNumber}
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
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full p-4 border rounded-bl-4xl text font-medium ${errors.emailAddress ? 'border-red-500' : 'border-[#822e27]'}`}
            />
            {errors.emailAddress && <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>}
          </div>
          
          <div className="flex justify-end items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-[#6ca2e3] flex items-center justify-center cursor-pointer"
            >
                <span className="mr-4 font-medium border-b-2 border-[#6ca2e3]">SIGN UP</span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img src={blueDirectArrow} alt="arrow-direction" className="w-full"/>
                </div>

            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;