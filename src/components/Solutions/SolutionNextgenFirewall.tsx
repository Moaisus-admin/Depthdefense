"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SolutionNextgenFirewall: React.FC = () => {
  const ref = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      imgRef.current,
      { scale: 0.8, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 2,
        ease: "bounce",
      }
    ).to(
      imgRef.current,
      {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      },
      "+=2"
    );
  }, []);
  return (
    <>
      <div className="blog-column-two-area ptb-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div ref={imgRef}>
              <Image
                src="/images/solutions/Firewall.jpg"
                alt="Image"
                width={510}
                height={400}
                className="w-full"
              />
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="single-blog-posts">
                <div
                  ref={ref}
                  className="single-blog-content dark:bg-zinc-900 rounded-xl"
                >
                  <p className="dark:text-white">
                    Next Generation Firewalls (NGFW) refers to advanced network
                    security devices that integrate traditional firewall
                    capabilities with advanced security technologies such as
                    intrusion prevention, application identification and
                    control, and advanced threat detection. A Web Application
                    Firewall (WAF) is a security solution that protects web
                    applications from several forms of cyber attacks. It is
                    designed to monitor the incoming and outgoing traffic to and
                    from a web application and identify and block any malicious
                    requests that could compromise the security of the
                    application. The firewall filters the requests according to
                    a set of predefined rules and policies based on the known
                    vulnerabilities of the application, such as SQL injection,
                    cross-site scripting, or file inclusion attacks. By
                    implementing a WAF, organizations can effectively protect
                    their web applications against common web application
                    attacks, reduce the risk of data breaches, and ensure
                    compliance with regulatory requirements.
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

export default SolutionNextgenFirewall;
