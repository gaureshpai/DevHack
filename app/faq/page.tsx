const FAQ= () => {
  return (
    <section className="bg-inherit ">
      <div className="p-8 md:p-12 lg:px-16 lg:py-20 sm:max-lg:pt-20">
        <div
          className="mx-auto max-w-5xl text-center mt-20"
          style={{ fontFamily: "blanka" }}
        >
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent text-5xl sm:text-5xl">
            FAQs
          </h1>
        </div>
        <div className="collapse collapse-arrow md:w-3/4 mx-auto transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 border-gray-800 bg-gray-900 text-white mt-10" style={{ fontFamily: "Varela" }}>
          <input placeholder="down" type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xs sm:text-sm md:text-xl font-medium">
            Who is eligible to participate in the DevHack Hackathon?
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-lg">
            <p>
            Any student currently enrolled in a College or University pursuing programs such as BE/B.Tech/Diploma, MCA/BCA, ME/M.Tech, B.Sc./M.Sc., or Polytechnic, as well as BBA/MBA students.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow md:w-3/4 mx-auto transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 border-gray-800 bg-gray-900 text-white mt-5" style={{ fontFamily: "Varela" }}>
          <input placeholder="down" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xs sm:text-sm md:text-xl font-medium">
            How can I select a mentor for my team?{" "}
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-lg">
            <p>
            Mentors can be selected from either the Industry or Academia, based on their relevant experience and qualifications. It's preferable to choose mentors from within the same institute for better alignment and understanding.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow md:w-3/4 mx-auto transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 border-gray-800 bg-gray-900 text-white mt-5" style={{ fontFamily: "Varela" }}>
          <input placeholder="down" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xs sm:text-sm md:text-xl font-medium">
            What is the team formation criteria?{" "}
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-lg">
            <p>
              Teams must consist of 6 members. Each team must have a unique Team
              Name.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow md:w-3/4 mx-auto transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 border-gray-800 bg-gray-900 text-white mt-5" style={{ fontFamily: "Varela" }}>
          <input placeholder="down" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xs sm:text-sm md:text-xl font-medium">
            How do we register for the DevHack Hackathon?{" "}
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-lg">
            <p>
              The Mentor or Team Leader should register the team at <span className="font-bold text-white"> DEVFOLIO</span> between November 1st, 2024, and November 15th, 2024. No fees are required for the Registration and Idea Submission round.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow md:w-3/4 mx-auto  transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 border-gray-800 bg-gray-900 text-white mt-5" style={{ fontFamily: "Varela" }}>
          <input placeholder="down" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xs sm:text-sm md:text-xl font-medium">
            What is required for the Primary Registration?
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-lg">
            <p>
            After team formation, teams should choose a theme and problem statement from the predefined list. Alternatively, they can innovate under any theme through the "OPEN INNOVATION" category. A signed consent letter from the Head of the Institution is mandatory.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow md:w-3/4 mx-auto transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 border-gray-800 bg-gray-900 text-white mt-5" style={{ fontFamily: "Varela" }}>
          <input placeholder="down" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xs sm:text-sm md:text-xl font-medium">
            How do we submit our idea for approval?
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-lg">
            <p>
            Participants should create a PPT based on the Idea Template provided on the DevHack portal and submit a PDF during the Idea Submission Round.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow md:w-3/4 mx-auto transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 border-gray-800 bg-gray-900 text-white mt-5" style={{ fontFamily: "Varela" }}>
          <input placeholder="down" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xs sm:text-sm md:text-xl font-medium">
            What happens after Idea Submission?{" "}
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-lg">
            <p>
            The DevHack Executive team will review all ideas, and upon approval, the Mentor will receive confirmation for the Grand Finale registration. Any discrepancies will be communicated via email or mobile.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow md:w-3/4 mx-auto transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 border-gray-800 bg-gray-900 text-white mt-5" style={{ fontFamily: "Varela" }}>
          <input placeholder="down" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xs sm:text-sm md:text-xl font-medium">
            How do we register for the Grand Finale?{" "}
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-lg">
            <p>
            Upon idea selection, the Mentor will receive a confirmation email for the Grand Finale registration. The team must complete the registration within the given deadline to avoid disqualification.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow md:w-3/4 mx-auto transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 border-gray-800 bg-gray-900 text-white mt-5" style={{ fontFamily: "Varela" }}>
          <input placeholder="down" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xs sm:text-sm md:text-xl font-medium">
            Where will the Grand Finale take place?{" "}
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-lg">
            <p>
            The Grand Finale of DevHack 2024 will be held offline at the AJ Institue of Engineering and Technology, Mangalore.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow md:w-3/4 mx-auto transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 border-gray-800 bg-gray-900 text-white mt-5" style={{ fontFamily: "Varela" }}>
          <input placeholder="down" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xs sm:text-sm md:text-xl font-medium">
            What are the requirements during the Grand Finale?{" "}
          </div>
          <div className="collapse-content text-xs sm:text-sm md:text-lg">
            <p>
            The full team, along with the Mentor, must be physically present throughout the hackathon duration (8 am to 8 pm). Solutions presented during the Grand Finale should be original and non-plagiarized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;