import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Client = () => {
  return (
    <div className='py-20' id='education'>
      <h1 className='heading'>
        My <span className='text-purple'>education</span> and{" "}
        <span className='text-purple'>ertification</span>
      </h1>
      <div className='flex flex-col items-center mt-10 mb-5 '>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='normal'
        />
      </div>
    </div>
  );
};

export default Client;
