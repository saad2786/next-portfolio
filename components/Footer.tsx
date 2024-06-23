import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className='mb-[100px]  w-full md:mb-5' id='contact'>
      <div className='w-full '>
        <h1 className='heading'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to next level?
        </h1>
        <p className='text-sm lg:text-lg text-center text-white-100 mt-5'>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href='mailto:patilsaad2786@gmail.com'
          className='flex justify-center lg:mt-2 mt-5'
        >
          <MagicButton
            title="Let's get in touch"
            position='right'
            icon={<FaLocationArrow />}
          />
        </a>
      </div>
      <div className='flex items-center flex-col gap-5  justify-between mt-16 md:flex-row'>
        <p className='text-sm md:text-base font-extralight md:font-light'>
          Copyrights &copy; 2024 Saad
        </p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map(({ id, img, link }) => {
            return (
              <Link
                href={link}
                target='_blank'
                key={id}
                className='flex items-center  justify-center p-3 bg-black-200 cursor-pointer bg-opacity-50 backdrop-blur-lg backdrop-filter saturate-150 rounded-xl h-10 w-10 border-black-300 border '
              >
                <img src={img} alt='medialink' className='md:w-5 w-5' />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
