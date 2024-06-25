"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const DDOS: React.FC = () => {
  const imageRef = useRef(null);
  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 20, // Move the image 20px up
      duration: 1, // The animation should last 1 second
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation on alternate iterations
      ease: "power1.inOut", // Use a smooth easing function
    });
  }, []);
  return (
    <>
      <div className="our-approach-area pb-70 pt-[50px] dark:bg-zinc-700">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="approach-img" ref={imageRef}>
                <Image
                  src="/images/services/services-Ae.jpg"
                  alt="Image"
                  width={600}
                  height={505}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-content">
                <h3 className="dark:text-white">DDoS Simulation</h3>

                <div className="row">
                  <div className="col-lg-12 col-sm-6">
                    <div className="single-approach-2 dark:bg-zinc-800">
                      <p className="dark:text-white">
                        A DDoS Simulation is an effort to make a system or
                        network device unavailable to its users by attempting to
                        connect simultaneously to the victim machine using
                        multiple hosts. It consists of the efforts to
                        temporarily or indefinitely interrupt or suspend
                        services of a host connected to the Internet. Target
                        sites include web servers such as banks, payment
                        gateways, etc.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-6">
                    <div className="single-approach-2 dark:bg-zinc-800">
                      <p className="dark:text-white">
                        The attack involves populating the target machine with a
                        massive number of requests, so that it does not respond
                        to legitimate traffic, or responds so slowly as to be
                        rendered effectively unavailable. The objective of these
                        attacks is to either force the target to reset or
                        rapidly consume all its resources so that it can no
                        longer provide its intended service.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-6">
                    <div className="single-approach-2 dark:bg-zinc-800">
                      <p className="dark:text-white">
                        There is always a threat of a DDoS attack irrespective
                        of the type of industry. There is a need to be prepared
                        to avoid such attacks. A professional team of DDoS
                        attackers can help you to secure yourself from attacks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DDOS;
