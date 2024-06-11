import { projects } from "@/data";
import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { PinContainer } from "./ui/3d-Pin";
import { AnimatedPinDemo } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <section id='projects' className='py-20'>
      <h1 className='heading'>
        The Small Selection of{" "}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap  items-center justify-center gap-x-24 gap-y-8 p-4 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]   flex items-center justify-center sm:w-[570px] w-[80vw] '
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
    </section>
  );
};

export default RecentProjects;
