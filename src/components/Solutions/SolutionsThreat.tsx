"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SolutionsThreat: React.FC = () => {
  return (
    <>
      <div className="blog-column-two-area pt-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4">
              <Image
                src="/images/solutions/Threat.jpg"
                alt="Image"
                width={910}
                height={300}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                  <p className="dark:text-white">
                    Threat Intelligence is the collection, analysis, and
                    dissemination of information related to security threats and
                    risks to organizational assets or infrastructure. It
                    involves using various sources of information, such as
                    internal logs, external feeds, and human intelligence, to
                    identify and mitigate potential security risks. The goal of
                    security and threat intelligence is to provide organizations
                    with the knowledge and tools they need to anticipate,
                    detect, and respond to cyber threats and attacks. This
                    information can be used to prevent attacks, minimize damage,
                    and quickly recover from an incident.
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

export default SolutionsThreat;
