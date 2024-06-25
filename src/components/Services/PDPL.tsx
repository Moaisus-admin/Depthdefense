"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PDPL: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const refs = [ref1, ref2, ref3]; // replace with your actual refs

    refs.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { scale: 0.5, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="blog-column-two-area  dark:bg-zinc-700 text-black">
        <div className="container">
          <div className="row w-full">
            <div className="col-lg-12 flex justify-center mt-[50px] mb-6">
              <Image
                src="/images/services/services-Ao.jpg"
                alt="Image"
                width={810}
                height={400}
              />
            </div>
            <div className="col-lg-9 col-md-12 m-auto">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content rounded-xl dark:bg-zinc-800 "
                  ref={ref1}
                >
                  <p className="dark:text-white ">
                    The Personal Data Protection Law (PDPL) is the first of its
                    kind to be passed in the Kingdom of Saudi Arabia (KSA). The
                    data protection rules were published in the government’s
                    Official Gazette on September 24, 2021, and comes into
                    effect on March 17, 2023. It regulates how businesses
                    collect, process, and store personal data about individuals
                    residing in the country.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-11 col-md-12 mt-6 m-auto">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={ref2}
                >
                  <h2 className="text-2xl mb-2 dark:text-white">
                    What is Saudi Arabia’s Personal Data Protection Law (PDPL)?
                  </h2>
                  <p className="dark:text-white">
                    The Personal Data Protection Law (PDPL) is the first data
                    protection law in Saudi Arabia. The law aims to protect the
                    rights of individuals (data subjects or users) concerning
                    their personal data, while also ensuring compliance with the
                    principles of effective and responsible data protection.
                  </p>

                  <p className="dark:text-white">
                    The PDPL will govern any kind of processing of personal data
                    including collecting, using, storing, sharing, transferring,
                    or updating of personal data of Saudi Arabia residents.
                  </p>
                  <p className="dark:text-white">
                    The overall objective of PDPL is to ensure that all entities
                    process personal data per the principles set out in PDPL.
                    This includes ensuring that there is a legal basis for
                    processing personal data, as well as ensuring that personal
                    data is processed fairly, lawfully, transparently, and
                    securely. In addition, safeguards should be put in place to
                    protect personal data from loss, damage, or destruction.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 mt-6">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-800 rounded-xl"
                  ref={ref3}
                >
                  <h2 className="text-2xl mb-2 dark:text-white">
                    Who does PDPL apply to?
                  </h2>
                  <p className="dark:text-white">
                    The PDPL applies to entities (including public and private
                    companies) and to their affiliates, that process the
                    personal data of Saudi residents, to provide them goods or
                    services. It also applies to entities operating outside
                    Saudi Arabia, that process the personal data of Saudi
                    residents.
                  </p>

                  <p className="dark:text-white">
                    The law protects personal data that includes information
                    that can be used to identify a natural person including a
                    deceased person or their family members, and excludes
                    information used for household or personal proposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDPL;
