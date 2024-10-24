'use client';

import './fonts/font.css';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';

const ContactUs = () => {
  return (
    <div>
      <button
        className="btn btn-circle fixed bottom-0 right-0 m-5 btn-info lg:btn-lg"
        onClick={() => {
          if (document) {
            (
              document.getElementById('my_modal_2') as HTMLFormElement
            ).showModal();
          }
        }}
      >
        {' '}
        <IoMdCall
          className="lg:h-8 lg:w-8 sm:h-5 sm:w-5"
          style={{
            color: '#000000',
          }}
        />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-gradient-to-r from-cyan-500 to-blue-500">
          <h3 className="font-bold text-3xl lg:text-5xl mb-10 text-center text-[#074081]" style={{fontFamily: "blanka",}}>
            CONTACT US
          </h3>
          <p className="py-4 flex flex-row text-sm lg:text-xl">
            <FaLocationDot
              className="mr-5 text-2xl lg:text-5xl"
              style={{
                color: '#074081',
              }}
            />
            NH-66, Kottara Chowki, Mangaluru, Karnataka 575006
          </p>
          <div className="divider divider-warning"></div>
          <div className="flex flex-column">
            <IoMdCall
              className="mr-5 mt-5 text-2xl lg:text-5xl"
              style={{
                color: '#074081',
              }}
            />
            <div className="">
              <p className="py-4 text-sm lg:text-xl">Dharshan Bhandary : (+91) 00000 00000</p>
              <p className="py-4 -mt-6 text-sm lg:text-xl">
                Jnanesh : (+91) 00000 00000
              </p>
            </div>
          </div>

          <div className="divider divider-warning"></div>
          <div className="flex flex-column">
            <MdEmail
              className="mr-5 mt-1 text-xl lg:text-5xl"
              style={{
                color: '#074081',
              }}
            />
            <p className="py-1 md:py-4 flex flex-row text-sm md:text-xl">contact@devhack.com</p>
          </div>
          <div className="divider divider-warning"></div>
          <div className="flex flex-column">
            <BsGlobe
              className="mr-5 mt-1 text-2xl lg:text-5xl"
              style={{
                color: '#074081',
              }}
            />
            <p className="py-1 md:py-4 flex flex-row text-sm lg:text-xl">ajiet.edu.in</p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ContactUs;
