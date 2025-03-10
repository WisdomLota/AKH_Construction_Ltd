import React, { useState } from 'react';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const [expandedMobile, setExpandedMobile] = useState(1);

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

  const handleQuestionClick = (id) => {
    setSelectedQuestion(id);
    
    // For mobile, toggle the expanded state when clicking the same question
    setExpandedMobile(expandedMobile === id ? null : id);
  };

  return (
    <div className="w-full py-8 px-4 md:px-8 bg-white">
      <div className="mx-auto lg:p-20 p-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#8B2A23] mb-8">
          Frequently<br />
          Asked<br />
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
              
              {/* Answer appears below the question on mobile when expanded */}
              {expandedMobile === faq.id && (
                <div className="mt-3 ml-8 bg-white rounded-lg shadow-xl p-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop view (side by side) */}
        <div className="hidden md:flex md:flex-row">
          <div className="w-1/2 pr-6">
            {faqData.map((faq) => (
              <div 
                key={faq.id} 
                className="mb-6 flex items-start font-medium cursor-pointer" 
                onClick={() => handleQuestionClick(faq.id)}
              >
                <div 
                  className={`w-4 h-4 rounded-full mt-1.5 mr-4 flex-shrink-0 ${
                    selectedQuestion === faq.id ? 'bg-blue-400' : 'bg-[#8B2A23]'
                  }`}
                ></div>
                <button className="text-left text-[#8B2A23] hover:text-[#A84034]">
                  {faq.question}
                </button>
              </div>
            ))}
          </div>

          <div className="w-1/2 md:p-16 p-2">
            <div className="bg-white rounded-lg shadow-xl p-6 md:ml-4">
              {faqData.find(faq => faq.id === selectedQuestion)?.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;