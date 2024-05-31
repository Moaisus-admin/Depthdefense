"use client";

import React from "react";
import Image from "next/image";

const DepthCybersecurity: React.FC = () => {
  return (
    <>
      <div className="solution-area solution-area-three white-bg pt-[60px] pb-70 dark:bg-zinc-900">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="solution-content">
                <div className="solution-title">
                  <h2 className="text-red-600">
                    Why You Need Defense in Depth Cybersecurity
                  </h2>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one dark:bg-zinc-800">
                      <div className="overly-two pt-4">
                        <p className="pb-2 text-lg dark:text-white">
                          Insider Threats Modern cyber threats can originate
                          from virtually (pun intended) anywhere – even from
                          inside your own network. Hackers use all kinds of
                          tricks to bypass your company’s tough perimeter
                          defenses while careless or actively malicious insiders
                          can create or exacerbate cybersecurity issues.
                        </p>
                        <p className="pb-2 text-lg dark:text-white">
                          {" "}
                          Defense in depth cybersecurity strategies are crucial
                          for countering insider threats-those threats which
                          originate from within the network itself. without some
                          kind of strong network segmentation to prevent attacks
                          on the inside from hopping from one asset to the next,
                          any insider threat would be able to easily compromise
                          the entire network. From a network security
                          standpoint, this is less than optimal.
                        </p>{" "}
                        <p className="pb-2 text-lg dark:text-white">
                          {" "}
                          Using a defense in depth cybersecurity plan restricts
                          attackers by blocking them from moving onto other
                          systems.
                        </p>
                        <span className="NumberLogo dark:text-white">01</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="single-solution overly-one dark:bg-zinc-800">
                      <div className="overly-two pt-4">
                        <p className="pb-2 text-lg dark:text-white">
                          Why You Need Defense in Depth Cybersecurity To
                          Minimize the Impact of Data Breaches are almost
                          inevitable. Sooner or later, there will be an attacker
                          determined, resourceful, or lucky enough to slip past
                          the perimeter defenses somehow to start ripping data
                          from your systenms. What using a defense in depth
                          cybersecurity plan does is make it harder for the
                          attacker to get at everything
                        </p>{" "}
                        <p className="pb-2 text-lg dark:text-white">
                          {" "}
                          Instead of having carte blanche to access everything
                          all at once as soon as they get past the perimeter,
                          the attacker will have to peel back each layer of
                          network security that you have. This massively
                          increases their “breakout time” (the time it takes
                          them to move from one server/asset on a network to the
                          next), which gives your network security team more
                          time to detect and counter the attack.
                        </p>{" "}
                        <p className="pb-2 text-lg dark:text-white">
                          {" "}
                          When attackers can access fewer systems, they’ll be
                          less likely to compromise as much data -thus reducing
                          the severity and impact of any resultant data
                          breaches. Yes, data will still be compromised, but
                          attackers getting only non-personally-identificable
                          account information is better than them walking off
                          with sensitive info like payment data or Social
                          Security Numbers.
                        </p>
                        <span className="NumberLogo dark:text-white">02</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 pb-9">
              <div className="solution-img-two text-center">
                <Image
                  src="/images/solution-img-2.png"
                  alt="Image"
                  width={524}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="solution-shape-left shape-three">
          <Image
            src="/images/solution-shape-left.png"
            alt="Image"
            width={153}
            height={144}
          />
        </div>
      </div>
    </>
  );
};

export default DepthCybersecurity;
