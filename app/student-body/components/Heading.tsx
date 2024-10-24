import React from "react";

const Heading: React.FC = () => {
  return (
    <>
      <div className="justify-center" style={{ fontFamily: "blanka" }}>
        <div className="gird grid-row-2 grid-flow-col justify-center text-center w-30">
          <div>
            <p className="font-bold text-5xl text-[#AAE6FF]"> CORE COMMITTEE</p>
            <p className="font-bold lg:indent-[30%] text-5xl text-white">
              MEMBERS
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
