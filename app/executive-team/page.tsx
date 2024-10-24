import React from "react";
import { people } from "./PeopleList";
import Heading from "./components/Heading";
import Person from "./components/Person";
const page = () => {
  return (
    <div className="sm:pt-40 xl:pt-40">
      <Heading title="PATRONS" />

      <div className="flex text-center justify-center align-items-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-20 p-8 md:p-12 lg:px-16 lg:py-24 lg:mt-10 ">
          {people
            .filter((person) => person.role === "PATRON")
            .map((person, index) => (
              <Person
                key={index}
                name={person.name}
                description={person.description}
                image={person.image}
                role={person.role}
                designation={person.designation}
              />
            ))}
        </div>
      </div>

      <Heading title="ADVISORS" />

      <div className="flex text-center justify-center align-items-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-20 p-8 md:p-12 lg:px-16 lg:py-24 lg:mt-10 ">
          {people
            .filter((person) => person.role === "ADVISOR")
            .map((person, index) => (
              <Person
                key={index}
                name={person.name}
                description={person.description}
                image={person.image}
                role={person.role}
                designation={person.designation}
              />
            ))}
        </div>
      </div>

      <Heading title="MENTORS" />

      <div className="flex text-center justify-center align-items-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-20 p-8 md:p-12 lg:px-16 lg:py-24 lg:mt-10 ">
          {people
            .filter((person) => person.role === "MENTOR")
            .map((person, index) => (
              <Person
                key={index}
                name={person.name}
                description={person.description}
                image={person.image}
                role={person.role}
                designation={person.designation}
              />
            ))}
        </div>
      </div>

      <Heading title="COMMITTEE MEMBERS" />

      <div className="flex text-center justify-center align-items-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-20 p-8 md:p-12 lg:px-16 lg:py-24 lg:mt-10 ">
          {people
            .filter((person) => person.role === "Core Committee")
            .map((person, index) => (
              <Person
                key={index}
                name={person.name}
                description={person.description}
                image={person.image}
                role={person.role}
                designation={person.designation}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
