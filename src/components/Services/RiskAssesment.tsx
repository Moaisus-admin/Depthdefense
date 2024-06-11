"use client";

import React from "react";
import Image from "next/image";

const RiskAssesment: React.FC = () => {
  return (
    <>
      <div className="blog-column-two-area  dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image
                src="/images/services/services-Ag.jpg"
                alt="Image"
                width={510}
                height={400}
              />
            </div>
            <div className="col-lg-6 col-md-12 mt-[100px]">
              <div className="single-blog-posts">
                <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                  <p className="dark:text-white">
                    IT security risk assessments focus on identifying the
                    threats facing your information systems, networks and data,
                    and assessing the potential consequences you’d face should
                    these adverse events occur. Risk assessments should be
                    conducted on a regular basis (e.g. annually) and whenever
                    major changes occur within your organization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 mt-6">
              <div className="single-blog-posts">
                <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                  <h2 className="text-2xl mb-2 dark:text-white">Red Teaming</h2>
                  <p className="dark:text-white">
                    Red Teaming is a security discipline originating in the
                    military arena that simulates full-spectrum cyber-attacks.
                    This allows you to measure your cyber defense’s
                    effectiveness against malicious actors and allows your
                    defenders to practice their detection and response
                    capabilities in a controlled environment and validate or
                    refine them. Lastly, the Red Team can also expose gaps in
                    your overall security defense capabilities by targeting your
                    organization and not being confined by the constraints of a
                    regular penetration test.
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

export default RiskAssesment;
