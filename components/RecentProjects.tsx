"use client";
import { projects } from "@/data";
import React, { useState } from "react";

import { PinContainer } from "./ui/3d-Pin";
import { AnimatedPinDemo } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  const [load, setLoad] = useState(false);
  function toggleLoadMore() {
    setLoad(true);
  }
  return (
    <section
      id='projects'
      className={`py-20 ${load ? "" : "h-[150vh] overflow-y-hidden "} relative`}
    >
      <h1 className='heading'>
        The Small Selection of{" "}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className=' flex flex-wrap  items-center justify-center overflow-hidden gap-x-24 gap-y-8 p-4 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]   flex items-center justify-center sm:w-[570px] w-[85vw] '
          >
            <PinContainer title={link} href={link}>
              <div className='flex flex-col relative  items—center justify-center sm:w-[570px] sm:h-[45vh] h-[34vh] w-[70vw] overflow-hidden   mb-10  '>
                <div className='relative w-full h-full  overflow-hidden lg:rounded-3xl bg-[#12162d]'>
                  <img src='/bg.png' alt='bg-img' className='object-cover' />
                </div>

                <img
                  src={img}
                  alt={img}
                  className='absolute z-10  bottom-8 left-0 right-0 mx-auto md:w-[500px] w-[320px] rounded-lg rotate-3'
                />
              </div>

              <h1 className='font-bold lg:text—2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-base text-sm font-light lg:font-normal line-clamp-2'>
                {des}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center '>
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className=' border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex items-center bg-black-100 justify-center'
                      style={{
                        transform: `translate(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>
                <div className='flex items-center justify-center '>
                  <p className='lg:text-base md:text-sm text-xs text-purple'>
                    Check Live Site
                  </p>
                  <FaLocationArrow className='ms-3' color='#cbacf9' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      {!load && (
        <div
          className={`w-full flex items-center justify-center h-40  backdrop-blur-md bg-opacity-80 bg-gradient-to-t from-black-100 to-transparent  absolute bottom-0 left-0 right-0 z-50 `}
        >
          <button
            onClick={toggleLoadMore}
            className='shadow-[inset_0_0_0_1px_#616467] text-black px-8 py-4 rounded-full tracking-widest uppercase text-md bg-transparent hover:bg-black-300 hover:text-white font-bold dark:text-neutral-200 transition duration-200'
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default RecentProjects;
