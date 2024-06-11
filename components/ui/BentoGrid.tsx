"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GridGlobe } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { InfiniteMovingSkills } from "./InfiniteMovingSkills";
import { backEndSkills, frontEndSkills } from "@/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid   grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  className,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    window.navigator.clipboard.writeText("patilsaad2786@gmail.com");
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1]    justify-between flex flex-col space-y-4 overflow-hidden",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          " linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center "} h-full`}>
        <div className='h-full w-full absolute'>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className='absolute z-50 flex items-center justify-center text-white font-bold' /> */}
          </BackgroundGradientAnimation>
        )}
        {id === 2 && <GridGlobe />}
        {id === 3 && (
          <div className='h-full  z-50 w-full'>
            <div className='flex gap-1 lg:gap-5 w-fit h-full absolute right-2 top-0 lg:-right-2  '>
              <InfiniteMovingSkills
                items={frontEndSkills}
                direction='right'
                speed='fast'
              />
            </div>
            <div className='flex gap-1 lg:gap-5 w-fit h-full absolute right-2 top-28 lg:top-16 lg:-right-2  '>
              <InfiniteMovingSkills
                items={backEndSkills}
                direction='left'
                speed='fast'
              />
            </div>
            {/* <span className='py-5  px-3  rounded-md text-center bg-[#10132e]' /> */}
          </div>
        )}

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full "}
            />
          )}
        </div>
      </div>
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
        )}
      >
        <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>
          {description}
        </div>
        <div
          className={` ${id === 6 && "lg:absolute  -top-5 left-0 "} ${
            id === 2 && "lg:absolute  -top-10  mx-auto "
          }   font-sans font-bold text-lg  lg:text-3xl w-full`}
        >
          {title}
          {id === 6 && (
            <div className='mt-8 relative'>
              <div className={`absolute -bottom-10 right-0`}>
                <Lottie
                  style={{
                    height: "100%",
                    marginBottom: "-120px",
                  }}
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "IxMidYMid slice",
                    },
                  }}
                />
                <MagicButton
                  title={copied ? "Email Copied" : "Copy my email"}
                  position='left'
                  icon={<IoCopyOutline />}
                  otherClasses='bg-[#161a31]'
                  handleClick={handleCopy}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
