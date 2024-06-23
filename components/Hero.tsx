import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='pt-36 pb-20'>
      <div>
        <Spotlight
          className='-top-40 -left-10 h-screen  md:-left-32 md:-top-20 '
          fill='white'
        />
        <Spotlight
          className='top-10 left-full h-[80vh] w-[50vw] '
          fill='purple'
        />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw] ' fill='blue' />
      </div>
      <div className='absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.3]  flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      </div>
      <div className=' flex justify-center relative my-20 z-10  '>
        <div
          className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center
        '
        >
          <h2 className='uppercase tracking-widest text-xs text-blue-100 max-w-80'>
            Magic of next.js with tailwind masala
          </h2>
          <TextGenerateEffect
            words='Transforming Concept into seamless User Experience '
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
          />
          <p className='text-center tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Saad, a Software Developer based in India
          </p>
          <a href='#work'>
            <MagicButton
              title='Show my work'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
