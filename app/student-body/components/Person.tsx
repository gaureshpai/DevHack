'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  name: string;
  description: string;
  image: string;
  role: string;
  designation: string;
}

const Person: React.FC<Props> = ({
  name,
  description,
  image,
  role,
  designation,
}) => {
  return (
    <div className="w-45 bg-inherit sm:max-lg:-ml-12">
      <div className="flex justify-center align-items-center">
        <div className="w-3/4 ml-0 lg:ml-12" style={{ perspective: '1000px' }}>
          <article
            className="rounded-tl-3xl rounded-br-3xl bg-white/10 p-0.5 shadow-xl transition hover:bg-[#5CE1E6] hover:shadow-sm dark:shadow-gray-700/25"
            style={{ position: 'relative', height: '300px', width: '300px' }}
          >
            <div className="rounded-[10px] p-4 sm:p-6">
              <motion.div 
                className="avatar"
                whileHover={{ scale: 1.1, translateZ: 50 }}
                transition={{ duration: 0.6 }}
                style={{ perspective: '1000px' }}
              >
                <div 
                  className="w-25 rounded-full ring ring-[#5CE1E6] ring-offset-base-100 ring-offset-2"
                  style={{ transform: 'translateZ(0)' }}
                >
                  <Image src={image} alt={name} width={300} height={300} />
                </div>
              </motion.div>
            </div>
          </article>
          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:max-lg:ml-12">
            <strong className="font-regular sm:max-lg:text-base text-xl text-white">
              {name}
            </strong>
          </div>
          <div className="mt-2 mb-5 sm:flex sm:items-center sm:justify-center sm:max-lg:ml-12">
            <strong className="font-medium text-lg text-white sm:max-lg:text-sm">
              {description}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
