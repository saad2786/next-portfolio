import React from "react";
import { Button } from "./ui/MovingBorder";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className='py-20' id='work'>
      <h1 className='heading'>
        My work <span className='text-purple'>experience</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 items-center '>
        {workExperience.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius='1.50rem'
            className='flex-1 text-white   border-neutral-200 dark:border-slate-800'
          >
            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
              <img
                src={item.thumbnail}
                alt={item.thumbnail}
                className='lg:w-32 md:w-20 w-16'
              />
              <div className=' lg:ms-5 '>
                <h1 className='text-xl md:text-2xl text-start font-bold'>
                  {item.title}
                </h1>
                <p className='text-start text-gray-300 mt-1 italic font-light'>
                  {item.company}
                </p>
                <p className='text-start text-white mt-3 font-normal'>
                  {item.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
