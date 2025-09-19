"use client";
import { projects } from "@/data";
import React, { useState } from "react";

import { PinContainer } from "./ui/3d-Pin";
import { AnimatedPinDemo } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-Card";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";

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
        {projects.map(({ id, title, des, img, iconLists, link, github }) => (
          <div
            key={id}
            className='sm:h-[41rem] h-[35.5rem] lg:min-h-[32.5rem]   flex items-center justify-center sm:w-[570px] w-[85vw] '
          >
            <CardContainer className='inter-var  '>
              <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-200 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[560px]   rounded-xl p-6 border  '>
                <CardItem translateZ='100' className='w-full mt-4'>
                  <img
                    src={img}
                    height='1000'
                    width='1000'
                    className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                    alt='thumbnail'
                  />
                </CardItem>
                <div className=' mt-10'>
                  <CardItem
                    translateZ='50'
                    className='text-xl font-bold text-neutral-600 dark:text-white'
                  >
                    {title}
                  </CardItem>
                  <CardItem
                    as='p'
                    translateZ='60'
                    className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
                  >
                    {des.split(" ").slice(0, 15).join(" ")}...
                  </CardItem>
                </div>
                <div className='flex justify-between items-center absolute bottom-0 left-0 mt-20 w-full p-8 pl-6'>
                  <CardItem
                    translateZ={20}
                    as='button'
                    className=' py-2 rounded-lg  text-xs font-bold flex items-center justify-center '
                  >
                    <div className='flex flex-row items-center justify-center w-full'>
                      <AnimatedTooltip items={iconLists} />
                    </div>
                  </CardItem>
                  <div className="flex gap-2 items-center justify-center">
                  <CardItem
                    translateZ={20}
                    as='button'
                    className='px-4 py-2 rounded-lg bg-black-300 dark:bg-white dark:text-black text-xs font-bold '
                  >
                    <Link
                      href={github}
                      className='flex items-center justify-center gap-2'
                      target='_blank'
                    >
                      <img
                        src='/github.svg'
                        alt='image'
                        className='text-black'
                      />
                      Github
                    </Link>
                  </CardItem>
                  {link != "" && <CardItem
                    translateZ={20}
                    as='button'
                    className='px-4 py-2 rounded-lg bg-black-300 dark:bg-green-300 dark:text-black text-xs font-bold '
                  >
                    <Link
                      href={link}
                      className='flex items-center justify-center gap-2'
                      target='_blank'
                    >
                      <img
                        src='/visit.png'
                        alt='image'
                        className='text-black w-4 h-4'
                        />
                      Visit
                    </Link>
                  </CardItem>}
                        </div>
                </div>
              </CardBody>
            </CardContainer>
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
