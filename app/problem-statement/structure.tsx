import React from 'react';

interface FAQ {
  statementHeading: string;
  problemStatement: string;
}

interface StructureProps {
  domain: string;
  faqs: FAQ[];
}

const Structure: React.FC<StructureProps> = ({ domain, faqs }) => {
  return (
    <section className="bg-inherit">
      <div className="p-4 sm:p-8 md:p-12 lg:px-16 lg:py-20 sm:max-lg:pt-20">
        <div className="mx-auto max-w-5xl text-center mt-20" style={{ fontFamily: "blanka" }}>
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl sm:text-3xl md:text-5xl pb-2 font-extrabold text-transparent">
            {domain}
          </h1>
        </div>
        <div className="divide-y divide-gray-100 rounded-xl mt-10 border border-gray-100 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
          {faqs.map((faq, index) => (
            <details className="group p-4 sm:p-6 [&_summary::-webkit-details-marker]:hidden" key={index}>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
                <h2 className="text-xs sm:text-sm md:text-xl font-medium">{faq.statementHeading}</h2>
                <span className="relative size-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                {faq.problemStatement}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;
