import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Client = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        Kind words from <span className='text-purple'>satisfied clients</span>
      </h1>
      <div className='flex flex-col items-center mt-10 '>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='normal'
        />
        <div className='flex items-center flex-wrap justify-center gap-4 md:gap-16 mt-10'>
          {companies.map(({ id, img, nameImg }) => {
            return (
              <div key={id} className='flex  gap-2 max-w-32 md:max-w-60'>
                <img src={img} alt='company' className='md:w-10 w-5' />
                <img src={nameImg} alt='companyName' className='md:w-24 w-20' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Client;
