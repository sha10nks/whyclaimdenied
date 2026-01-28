import React, { useState } from 'react';

const FAQ = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div 
            className="faq-question" 
            onClick={() => toggleFAQ(index)}
            role="button"
            aria-expanded={activeIndex === index}
          >
            {item.question}
            <span>{activeIndex === index ? '−' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
