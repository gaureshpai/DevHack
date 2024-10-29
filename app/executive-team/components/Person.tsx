import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  description: string;
  image: string;
  role: string;
  designation: string;
}

const Person: React.FC<Props> = React.memo(
  ({ name, description, image, role, designation }) => {
    const displayRole = role !== "Core Committee" ? role : designation;

    return (
      <div className="w-45 bg-inherit sm:max-lg:py-10">
        <div className="flex justify-center items-center border-r-4 border-[#1DD8FE]">
          <div className="w-3/4 lg:ml-12">
            <article className="hover:animate-background rounded-tl-3xl rounded-br-3xl bg-white/10 p-0.5 shadow-xl transition hover:bg-[#5CE1E6] hover:shadow-sm dark:shadow-gray-700/25">
              <div className="rounded-[10px] p-4 sm:p-6">
                <div className="avatar">
                  <div className="w-25 rounded-full ring ring-[#5CE1E6] ring-offset-base-100 ring-offset-2">
                    <Image src={image} alt={name} width={300} height={300} />
                  </div>
                </div>
              </div>
            </article>
            <div className="mt-4 sm:flex sm:items-center sm:justify-center">
              <strong className="text-xl text-white sm:max-lg:text-base">
                {name}
              </strong>
            </div>
            <div className="mt-2 mb-5 sm:flex sm:items-center sm:justify-center">
              <strong className="text-lg text-white sm:max-lg:text-sm font-medium">
                {description}
              </strong>
            </div>
          </div>
        </div>

        <div className="-mt-4 sm:flex sm:items-center sm:justify-end sm:gap-3">
          <strong className="text-2xl text-[#1DD8FE] font-bold sm:max-lg:text-xl font-blanka">
            {displayRole}
          </strong>
          <span className="hidden sm:block sm:h-1 sm:w-20 sm:bg-[#1DD8FE]"></span>
          <span className="hidden sm:block sm:h-1 sm:w-20 sm:-ml-4 sm:bg-[#1DD8FE]"></span>
          <span className="hidden sm:max-lg:w-10 sm:block sm:h-1 sm:w-20 sm:-ml-4 sm:bg-[#1DD8FE]"></span>
        </div>
      </div>
    );
  }
);

export default Person;
