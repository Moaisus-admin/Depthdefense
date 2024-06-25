"use client";
import React, { useState } from "react";

interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

const reviews: Review[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const TestimonialsContent: React.FC = () => {
  const [isFirstRowPaused, setIsFirstRowPaused] = useState(false);
  const [isSecondRowPaused, setIsSecondRowPaused] = useState(false);

  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  const handleFirstRowHover = (isPaused: boolean) => {
    setIsFirstRowPaused(isPaused);
  };

  const handleSecondRowHover = (isPaused: boolean) => {
    setIsSecondRowPaused(isPaused);
  };

  const ReviewCard: React.FC<
    Review & { isPaused: boolean; handleHover: (isPaused: boolean) => void }
  > = ({ img, name, username, body, handleHover }) => {
    return (
      <figure
        className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-50/[.10] dark:hover:bg-gray-50/[.15]"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
      <div>
        <h1 className="text-4xl text-center font-normal mb-4 text-red-600">
          What Our Customers Say
        </h1>
      </div>
      <div className="group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)]">
        {[...firstRow, ...firstRow].map((review, index) => (
          <div
            key={index}
            className={`flex-shrink-0 animate-marquee ${
              isFirstRowPaused ? "paused" : ""
            }`}
            onMouseEnter={() => handleFirstRowHover(true)}
            onMouseLeave={() => handleFirstRowHover(false)}
          >
            <ReviewCard
              {...review}
              isPaused={isFirstRowPaused}
              handleHover={handleFirstRowHover}
            />
          </div>
        ))}
      </div>

      <div className="group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)]">
        {[...secondRow, ...secondRow].map((review, index) => (
          <div
            key={index}
            className={`flex-shrink-0 animate-marquee-reverse ${
              isSecondRowPaused ? "paused" : ""
            }`}
            onMouseEnter={() => handleSecondRowHover(true)}
            onMouseLeave={() => handleSecondRowHover(false)}
          >
            <ReviewCard
              {...review}
              isPaused={isSecondRowPaused}
              handleHover={handleSecondRowHover}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default TestimonialsContent;
