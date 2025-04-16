import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [expandedMobile, setExpandedMobile] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // FAQ data with questions and answers
  const faqData = [
    {
      id: 1,
      question: "If I pay online how will I prove that I am the owner of the building?",
      answer: "Once your online payment has been completed and confirmed you will be sent a document of ownership to solidify your purchase."
    },
    {
      id: 2,
      question: "What happens if I loose my document of ownership before I am able to claim my home?",
      answer: "If you lose your document of ownership, you can request a replacement through your online account. You'll need to verify your identity, and a new document will be issued for a small administrative fee."
    },
    {
      id: 3,
      question: "How do I get to my profile page?",
      answer: "To access your profile page, log in to your account, then click on your name or profile picture in the top right corner of the website. From the dropdown menu, select 'My Profile'."
    },
    {
      id: 4,
      question: "How can I get a discount on my home purchase/acquisition?",
      answer: "Discounts are available for first-time homebuyers, early payments, and seasonal promotions. You can also join our loyalty program for additional savings on your purchase."
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        // Move to the next question (cycle back to 1 if at the end)
        const nextQuestion = selectedQuestion >= faqData.length ? 1 : selectedQuestion + 1;
        setSelectedQuestion(nextQuestion);
        setExpandedMobile(nextQuestion);
        setIsTransitioning(false);
      }, 800); // Half of the transition time
    }, 4000); // Rotate every 3 seconds

    // Clean up timer on component unmount
    return () => clearInterval(rotationTimer);
  }, [selectedQuestion, faqData.length]);

  const handleQuestionClick = (id) => {
    if (selectedQuestion !== id) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedQuestion(id);
        setIsTransitioning(false);
      }, 300); // Half of the transition time to change content at the midpoint
    }
    
    // For mobile, toggle the expanded state when clicking the same question
    setExpandedMobile(expandedMobile === id ? null : id);
  };

  return (
    <div className="w-full py-8 px-4 md:px-12 bg-white">
      <div className="mx-auto lg:p-20 p-8 xl:ml-20">
        <h2 className="text-6xl md:text-8xl font-semibold text-[#8B2A23] lg:mb-1 mb-8">
          Frequently
          Asked
          Questions
        </h2>

        {/* Mobile view (stacked) */}
        <div className="md:hidden w-full">
          {faqData.map((faq) => (
            <div key={faq.id} className="mb-6">
              <div 
                className="flex items-start font-medium cursor-pointer" 
                onClick={() => handleQuestionClick(faq.id)}
              >
                <div 
                  className={`w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0 ${
                    expandedMobile === faq.id ? 'bg-blue-400' : 'bg-[#8B2A23]'
                  }`}
                ></div>
                <button className="text-left text-[#8B2A23] hover:text-[#A84034]">
                  {faq.question}
                </button>
              </div>
              
              {/* Answer appears below the question on mobile with transition */}
              <div 
                className={`mt-3 ml-8 overflow-hidden transition-all shadow-xl duration-300 ease-in-out ${
                  expandedMobile === faq.id ? 'h-fit opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`bg-white text-[#822e27] rounded-lg shadow-xl p-6 md:ml-4 transition-all duration-500 ease-in-out ${
                isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view (side by side) */}
        <div className="hidden md:flex md:flex-row justify-center items-center mt-12">
          <div className="w-1/2 pr-6">
            {faqData.map((faq) => (
              <div 
                key={faq.id} 
                className="mb-6 flex items-start font-medium cursor-pointer space-y-4 " 
                onClick={() => handleQuestionClick(faq.id)}
              >
                <div 
                  className={`w-4 h-4 mt-1.5 rounded-full mr-4 flex-shrink-0 ${
                    selectedQuestion === faq.id ? 'bg-blue-400' : 'bg-[#822e27]'
                  }`}
                ></div>
                <button className="text-left text-[#8B2A23] hover:text-[#822e27]">
                  {faq.question}
                </button>
              </div>
            ))}
          </div>

          <div className="w-1/2 md:p-16 p-8 ">
            <div 
              className={`bg-white text-[#822e27] rounded-lg shadow-xl p-6 md:ml-4 transition-all duration-500 ease-in-out min-h-48 flex flex-col justify-center items-center ${
                isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              {faqData.find(faq => faq.id === selectedQuestion)?.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;