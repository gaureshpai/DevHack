"use client"
import React, { useEffect, useState } from 'react';
import Structure from '../problem-statement/structure';
import faqData from '../problem-statement/robotics.json';

interface FAQ {
  statementHeading: string;
  problemStatement: string;
}

interface FAQData {
  domain: string;
  faqs: FAQ[];
}

const FAQList: React.FC = () => {
  const [faqList, setFaqList] = useState<FAQData>({ domain: '', faqs: [] });

  useEffect(() => {
    setFaqList(faqData as FAQData);  // Type assertion to FAQData
  }, []);

  return (
    <div>
      <Structure domain={faqList.domain} faqs={faqList.faqs} />
    </div>
  );
};

export default FAQList;
