"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SolutionsAPT: React.FC = () => {
  return (
    <>
      <div className="blog-column-two-area pt-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4">
              <Image
                src="/images/solutions/APT.jpg"
                alt="Image"
                width={550}
                height={300}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                  <p className="dark:text-white">
                    An Advanced Persistent Threat (APT) is a targeted cyber
                    attack that is designed to gain unauthorized access to
                    sensitive information or systems for an extended period of
                    time. APT attacks are typically carried out by skilled and
                    well-funded attackers who use multiple attack vectors,
                    including social engineering, malware, and exploit kits, to
                    bypass traditional security measures and gain access. Once
                    inside the system, the attackers use sophisticated
                    techniques to move laterally across the network, steal data,
                    and maintain persistence, often remaining undetected for
                    months or even years. APT attacks are often associated with
                    state-sponsored groups or organized crime syndicates that
                    have the resources and motivation to launch targeted attacks
                    against specific organizations or individuals.
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

export default SolutionsAPT;
