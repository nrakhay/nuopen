import React from "react";
import FAQElement from "./FAQElement";
import { faqData } from "../../utils/faqData";

function FAQ() {
  return (
    <div className="component-container faq">
      <h1 className="schedule-header">FAQ</h1>
      <h2 className="schedule-date">Frequently Asked Questions</h2>

      {faqData.map(({ question, answer }) => (
        <FAQElement question={question} answer={answer} />
      ))}
    </div>
  );
}

export default FAQ;
