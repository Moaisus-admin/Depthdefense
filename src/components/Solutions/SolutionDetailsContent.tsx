"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EndPointProtection: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const elements = [ref1, ref2, ref3, ref4];
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
          start: "top center",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);
  return (
    <>
      <div className="blog-column-two-area ptb-100 dark:bg-zinc-700">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6" ref={ref1}>
              <div className="single-blog-posts">
                <Image
                  src="/images/solutions/solution-3.jpg"
                  alt="Image"
                  width={810}
                  height={500}
                />

                <div className="single-blog-content">
                  <span className="text-2xl">EDR:</span>

                  <p>
                    Endpoint Detection and Response (EDR) is a security solution
                    that protects against malware and other cyber threats that
                    can bypass traditional antivirus software. EDR solutions
                    monitor endpoints (e.g. laptops, desktops, servers) in
                    real-time to detect and respond to threats. EDR benefits
                    include improved threat detection, quicker response times,
                    and increased visibility into endpoint activity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6" ref={ref2}>
              <div className="single-blog-posts">
                <Image
                  src="/images/solutions/XDR.jpg"
                  alt="Image"
                  width={810}
                  height={500}
                />

                <div className="single-blog-content">
                  <span className="text-2xl">XDR</span>

                  <p>
                    Extended Detection and Response (XDR) is a tool that
                    automates threat detection, response, and remediation across
                    different security tools and platforms. XDR combines data
                    from multiple sources to provide a more comprehensive view
                    of the threat landscape. XDR benefits include improved
                    collaboration between security teams, faster threat
                    detection and response, and more efficient security
                    operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6" ref={ref3}>
              <div className="single-blog-posts">
                <Image
                  src="/images/solutions/NDR.jpg"
                  alt="Image"
                  width={810}
                  height={500}
                />

                <div className="single-blog-content">
                  <span className="text-2xl">NDR</span>

                  <p>
                    Network Detection and Response (NDR) is a security solution
                    that monitors network traffic to detect and respond to
                    threats in real-time. NDR solutions use advanced analytics
                    and machine learning to identify and prioritize alerts,
                    reducing the amount of false positives. NDR benefits include
                    improved threat detection, quicker response times, and
                    increased visibility into network activity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6" ref={ref4}>
              <div className="single-blog-posts">
                <Image
                  src="/images/solutions/MDR.jpg"
                  alt="Image"
                  width={810}
                  height={500}
                />

                <div className="single-blog-content">
                  <span className="text-2xl">MDR</span>

                  <p>
                    Managed Detection and Response (MDR) is a cybersecurity
                    service that detects threats, provides incident response,
                    and manages security operations for businesses. MDR services
                    use advanced technologies, such as machine learning
                    algorithms and artificial intelligence, to identify and
                    respond to threats in real-time. MDR providers typically
                    monitor network activity, logs, and endpoints for signs of
                    malicious activity, investigate and assess any potential
                    threats, and respond with appropriate actions to contain and
                    mitigate the impacts of any security incidents. MDR services
                    are particularly valuable for organizations with limited IT
                    security resources and expertise, as they provide an
                    outsourced solution to enhance the overall protection of the
                    organization’s systems and data.
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

export default EndPointProtection;
