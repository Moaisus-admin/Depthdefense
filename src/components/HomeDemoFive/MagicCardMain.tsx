"use client";
import { MagicCard, MagicContainer } from "./MagicCard";
import { Typewriter } from "react-simple-typewriter";

export function MagicCardDemo() {
  return (
    <>
      <div className="section-title w-full">
        <span className="text-2xl text-[#e21f36]">Services</span>
        <h3 className="text-3xl dark:text-white font-poppins">
          <Typewriter
            words={[
              "You Can Protect Your Organization's Cybersecurity By Services Us",
            ]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
      </div>

      <MagicContainer
        className={
          "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
        }
      >
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-2xl sm:text-4xl font-medium text-gray-800 ">
            SOC/IR Service
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-2xl sm:text-4xl font-medium text-gray-800 ">
            VAPT
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
          <p className="z-10 whitespace-nowrap text-2xl sm:text-4xl font-medium text-gray-800 ">
            Risk Management
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
    </>
  );
}
