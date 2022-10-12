import { useState } from "react";

const FAQElement = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={() => setIsActive(!isActive)} className="faq-element">
      <div className="question">
        <h3>{question}</h3>
        {isActive ? (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              fill="none"
              stroke="#e15f62"
              stroke-width="2"
              points="7.086 1.174 17.086 11.174 7.086 21.174"
              transform="rotate(-89 12.086 11.174)"
            />
          </svg>
        ) : (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              background-color="#e15f62"
              fill="none"
              stroke="#e15f62"
              stroke-width="2"
              points="7.086 3.174 17.086 13.174 7.086 23.174"
              transform="scale(1 -1) rotate(-89 -1.32 0)"
            />
          </svg>
        )}
      </div>
      <div className="answer">{isActive && <p>{answer}</p>}</div>
    </div>
  );
};

export default FAQElement;
