"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const NetworkSecurity: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const pref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pref.current,
      { scale: 0.5, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 2,
        scrollTrigger: {
          trigger: pref.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
    const elements = [ref1, ref2];
    elements.forEach((ref, index) => {
      gsap.set(ref.current, {
        x: index % 2 === 0 ? "-100vw" : "100vw",
        autoAlpha: 0,
      });

      gsap.to(ref.current, {
        x: "0",
        autoAlpha: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);
  return (
    <>
      <div className="blog-column-two-area ptb-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" ref={ref1}>
              <Image
                src="/images/services/services-Aj.jpg"
                alt="Image"
                width={510}
                height={400}
              />
            </div>
            <div className="col-lg-6" ref={ref2}>
              <Image
                src="/images/services/services-Ak.jpg"
                alt="Image"
                width={510}
                height={400}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-[40px]">
              <div className="single-blog-posts">
                <div
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
                  ref={pref}
                >
                  <p className="dark:text-white">
                    Network and security operations refer to the processes and
                    practices used by an organization to monitor, manage, and
                    secure their computer networks and systems. This includes
                    managing network infrastructure, monitoring network traffic,
                    detecting and responding to security threats, and ensuring
                    data protection and compliance with regulatory standards.
                    Network and security operations involve a combination of
                    hardware, software, and personnel, and typically include
                    tools such as firewalls, intrusion detection systems, and
                    security incident and event management (SIEM) platforms.
                    Effective network and security operations play a crucial
                    role in protecting an organization’s assets and maintaining
                    the integrity and reliability of their network and systems.
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

export default NetworkSecurity;
