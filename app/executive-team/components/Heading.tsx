import React from "react";

interface Props {
  title: string;
}

const Heading: React.FC<Props> = React.memo(({ title }) => {
  const isCommitteeMembers = title === "COMMITTEE MEMBERS";

  return (
    <div className="justify-center font-blanka">
      <div className="grid grid-row-2 grid-flow-col justify-center text-center w-30">
        <p className="font-bold text-5xl text-[#AAE6FF]">
          {isCommitteeMembers ? "COMMITTEE" : "RESPECTED"}
        </p>
        <p className="font-bold lg:indent-[30%] text-5xl text-white">
          {isCommitteeMembers ? "MEMBERS" : title}
        </p>
      </div>
    </div>
  );
});

export default Heading;
