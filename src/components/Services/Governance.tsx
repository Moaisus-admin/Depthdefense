"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Governance: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const p1Ref1 = useRef(null);
  const p1Ref2 = useRef(null);
  const p1Ref3 = useRef(null);
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const pRef3 = useRef(null);
  const pRef4 = useRef(null);
  const pRef5 = useRef(null);
  const pRef6 = useRef(null);
  const pRef7 = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(".fadeIn", { opacity: 0 }, { opacity: 1, duration: 4 });
    const elements = [ref1, ref2, ref3, ref4];
    elements.forEach((ref, index) => {
      gsap.set(ref.current, {
        x: "-100vw",
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

    const refs = [p1Ref1, p1Ref2, p1Ref3];

    refs.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, scaleX: 0 }, // Start with no width
        {
          duration: 1, // Make the animation slower for the image
          opacity: 1, // End with full visibility
          scaleX: 1, // End with full width
          ease: "power1.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top center", // when the top of the trigger hits the center of the viewport
            end: "bottom center", // end after scrolling 500px beyond the start
            toggleActions: "play none none none", // don't reverse the animation
          },
        }
      );
    });

    const prefs = [pRef1, pRef2, pRef3, pRef4, pRef5, pRef6, pRef7];

    prefs.forEach((pref) => {
      gsap.fromTo(
        pref.current,
        { opacity: 0, scale: 0.5 }, // Start with no visibility and a small scale
        {
          duration: 1, // Make the animation slower for the image
          opacity: 1, // End with full visibility
          scale: 1, // End with full scale
          ease: "bounce.out",
          scrollTrigger: {
            trigger: pref.current,
            start: "top center", // when the top of the trigger hits the center of the viewport
            end: "bottom center", // end after scrolling 500px beyond the start
            toggleActions: "play none none none", // don't reverse the animation
          },
        }
      );
    });

    gsap.to(imageRef.current, {
      y: 20, // Move the image 20px up
      duration: 1, // The animation should last 1 second
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation on alternate iterations
      ease: "power1.inOut", // Use a smooth easing function
    });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div className="our-approach-area pb-70 pt-[60px] text-black dark:bg-zinc-700">
        <div className="container">
          <div className="section-title">
            <h2 className="dark:text-white">GRC</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="approach-img">
                <Image
                  src="/images/services/services-Az.jpg"
                  alt="Image"
                  width={600}
                  height={505}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="approach-content">
                <p className="mt-4 dark:text-white fadeIn">
                  Governance, Risk, and Compliance (GRC) is a structured way to
                  align IT with business goals while managing risks and meeting
                  all industry and government regulations. It includes tools and
                  processes to unify an organization’s governance and risk
                  management with its technological innovation and adoption.
                  Companies use GRC to achieve organizational goals reliably,
                  remove uncertainty, and meet compliance requirements.
                </p>

                <div className="section-title mt-5 fadeIn">
                  <h2 className="dark:text-white">What does GRC stand for?</h2>

                  <p className=" mb-4 dark:text-white fadeIn">
                    GRC stands for governance, risk (management), and
                    compliance. Most businesses are familiar with these terms
                    but have practiced them separately in the past. GRC combines
                    governance, risk management, and compliance in one
                    coordinated model. This helps your company reduce wastage,
                    increase efficiency, reduce noncompliance risk, and share
                    information more effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="our-approach-area our-approach-area-four pb-70 mt-9">
            <div className="container">
              <div className="section-title">
                <h2 className="dark:text-white">Governance</h2>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="approach-content">
                    <p className="dark:text-white">
                      Governance is the set of policies, rules, or frameworks
                      that a company uses to achieve its business goals. It
                      defines the responsibilities of key stakeholders, such as
                      the board of directors and senior management. For example,
                      good corporate governance supports your team in including
                      the company’s social responsibility policy in their plans.
                      Good governance includes the following:
                    </p>

                    <div className="row mt-4">
                      <div className="col-lg-6 col-sm-6">
                        <div
                          className=" dark:bg-zinc-600 shadow-2xl rounded-full px-3"
                          ref={ref1}
                        >
                          <h3 className="dark:text-white text-center">
                            Ethics and accountability
                          </h3>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div
                          className=" dark:bg-zinc-600 shadow-xl rounded-full px-3"
                          ref={ref2}
                        >
                          <h3 className="dark:text-white text-center">
                            Transparent information sharing
                          </h3>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div
                          className=" dark:bg-zinc-600 shadow-xl rounded-full px-3"
                          ref={ref3}
                        >
                          <h3 className="dark:text-white text-center">
                            Conflict resolution policies
                          </h3>
                        </div>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <div
                          className=" dark:bg-zinc-600 shadow-xl rounded-full px-3"
                          ref={ref4}
                        >
                          <h3 className="dark:text-white text-center">
                            Resource management
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-column-two-area dark:bg-zinc-700">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-blog-content dark:bg-zinc-600 dark:text-white rounded-xl p-4"
                    ref={p1Ref1}
                  >
                    <span className="text-2xl text-red-600">
                      Risk management:
                    </span>

                    <p className="mt-2">
                      Businesses face different types of risks, including
                      financial, legal, strategic, and security risks. Proper
                      risk management helps businesses identify these risks and
                      find ways to remediate any that are found. Companies use
                      an enterprise risk management program to predict potential
                      problems and minimize losses. For example, you can use
                      risk assessment to find security loopholes in your
                      computer system and apply a fix.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 mt-5">
                  <div
                    className="single-blog-content dark:bg-zinc-600 dark:text-white rounded-xl p-4"
                    ref={p1Ref2}
                  >
                    <span className="text-2xl text-red-600">Compliance:</span>

                    <p className="mt-2">
                      Compliance is the act of following rules, laws, and
                      regulations. It applies to legal and regulatory
                      requirements set by industrial bodies and also for
                      internal corporate policies. In GRC, compliance involves
                      implementing procedures to ensure that business activities
                      comply with the respective regulations. For example,
                      healthcare organizations must comply with laws like HIPAA
                      that protect patients’ privacy.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 mt-5">
                  <div
                    className="single-blog-content dark:bg-zinc-600 dark:text-white rounded-xl p-4"
                    ref={p1Ref3}
                  >
                    <span className="text-2xl text-red-600">
                      Why is GRC important?
                    </span>

                    <p className="mt-2">
                      By implementing GRC programs, businesses can make better
                      decisions in a risk-aware environment. An effective GRC
                      program helps key stakeholders set policies from a shared
                      perspective and comply with regulatory requirements. With
                      GRC, the entire company comes together in its policies,
                      decisions, and actions.
                    </p>
                  </div>
                </div>
                <p className="dark:text-white text-xl mt-4" ref={pRef1}>
                  The following are some benefits of implementing a GRC strategy
                  at your organization.
                </p>
                <p className="text-red-600 text-2xl mt-4" ref={pRef2}>
                  {" "}
                  Data-driven decision-making
                </p>{" "}
                <p className="dark:text-white text-xl mt-2" ref={pRef3}>
                  You can make data-driven decisions within a shorter time frame
                  by monitoring your resources, setting up rules or frameworks,
                  and using GRC software and tools.
                </p>{" "}
                <p className="text-red-600 text-2xl mt-4" ref={pRef4}>
                  Responsible operations
                </p>{" "}
                <p className="dark:text-white text-xl mt-2" ref={pRef5}>
                  GRC streamlines operations around a common culture that
                  promotes ethical values and creates a healthy environment for
                  growth. It guides strong organizational culture development
                  and ethical decision-making in the organization.
                </p>{" "}
                <p className="text-red-600 text-2xl mt-4" ref={pRef6}>
                  Improved cybersecurity
                </p>{" "}
                <p className="dark:text-white text-xl mt-2" ref={pRef7}>
                  With an integrated GRC approach, businesses can employ data
                  security measures to protect customer data and private
                  information. Implementing a GRC strategy is essential for your
                  organization due to increasing cyber risk that threatens
                  users’ data and privacy. It helps organizations comply with
                  data privacy regulations like the General Data Protection
                  Regulation (GDPR). With a GRC IT strategy, you build customer
                  trust and protect your business from penalties.
                </p>
              </div>
            </div>
          </div>

          <div className="blog-column-two-area ptb-100 dark:bg-zinc-700">
            <div className="container">
              <div className="row col-lg-10 m-auto" ref={imageRef}>
                <Image
                  src="/images/services/services-Azz.jpg"
                  alt="Image"
                  width={410}
                  height={400}
                  className="w-full rounded-full"
                />
              </div>
              <div className="col-lg-12 col-md-12 mt-9">
                <div className="single-blog-posts">
                  <div className="single-blog-content dark:bg-zinc-800 rounded-3xl">
                    <p className="dark:text-white">
                      Next Generation Firewalls (NGFW) refers to advanced
                      network security devices that integrate traditional
                      firewall capabilities with advanced security technologies
                      such as intrusion prevention, application identification
                      and control, and advanced threat detection. A Web
                      Application Firewall (WAF) is a security solution that
                      protects web applications from several forms of cyber
                      attacks. It is designed to monitor the incoming and
                      outgoing traffic to and from a web application and
                      identify and block any malicious requests that could
                      compromise the security of the application. The firewall
                      filters the requests according to a set of predefined
                      rules and policies based on the known vulnerabilities of
                      the application, such as SQL injection, cross-site
                      scripting, or file inclusion attacks. By implementing a
                      WAF, organizations can effectively protect their web
                      applications against common web application attacks,
                      reduce the risk of data breaches, and ensure compliance
                      with regulatory requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-us-area pb-70  text-black ">
            <div className="container mx-auto px-4 overflow-hidden">
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                  <div className="about-img mr-auto w-fit">
                    <Image
                      src="/images/services/services-Ay.jpg"
                      alt="Image"
                      width={300}
                      height={345}
                      layout="responsive"
                      className="pt-[80px]"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 text-black">
                  <div className="about-content">
                    <div className="about-title">
                      <h2 className="text-red-600">CITC Compliance</h2>
                    </div>

                    <ul
                      ref={ref}
                      className="transition-opacity duration-500 ease-in-out"
                    >
                      <li
                        className={`shine-animation flex items-center mb-2 dark:text-white  ${
                          inView ? "slide-in" : "opacity-0"
                        }`}
                      >
                        (CITC Cybersecurity Regulatory Framework (CRF)) aims to
                        increase the level of maturity of cybersecurity in
                        communication and information technology sector in the
                        Kingdom of Saudi Arabia, the framework aims to:
                      </li>
                      <li
                        className={`shine-animation flex items-center mb-2 dark:text-white mt-5 ${
                          inView ? "slide-in" : "opacity-0"
                        }`}
                      >
                        Organize and enable cybersecurity practices for the
                        service providers in communication, information
                        technology, and the postal sector.
                      </li>
                      <li
                        className={`shine-animation flex items-center mb-2 dark:text-white  ${
                          inView ? "slide-in" : "opacity-0"
                        }`}
                      >
                        Raising the maturity level of cybersecurity in the
                        communication and information technology sector.
                      </li>
                      <li
                        className={`shine-animation flex items-center mb-2 dark:text-white ${
                          inView ? "slide-in" : "opacity-0"
                        }`}
                      >
                        Adopt risk management methodology to achieve
                        cybersecurity requirements.
                      </li>
                      <li
                        className={`shine-animation flex items-center mb-2 dark:text-white mt-5 ${
                          inView ? "slide-in" : "opacity-0"
                        }`}
                      >
                        Ensure the confidentiality, safety, and availability of
                        service provided to the customers.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-column-two-area  dark:bg-zinc-700 mt-[90px]">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="single-blog-posts">
                    <div className="single-blog-content dark:bg-zinc-700 rounded-xl">
                      <div className="about-title">
                        <h3 className="text-red-600 text-2xl">
                          NCA ECC Compliance:
                        </h3>
                      </div>
                      <p className="dark:text-white">
                        The National Cybersecurity Authority (NCA) of Saudi
                        Arabia developed the Essential Cybersecurity Controls in
                        the year 2018. It was developed after a comprehensive
                        study of various national and international Cyber
                        Security Frameworks and Standards. The NCA ECC was
                        developed to ensure organizations maintain and support
                        the Cybersecurity initiative to protect the interests,
                        national security, critical infrastructure, and
                        government services. It was developed with an aim to set
                        minimum Cybersecurity requirements for information and
                        technology assets in organizations of Saudi Arabia. The
                        controls requirements developed are based on
                        industry-leading practices which intend to help
                        organizations minimize Cybersecurity Risks. The
                        Essential Cybersecurity Controls (ECC) comprises-
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <Image
                    src="/images/services/services-Ax.jpg"
                    alt="Image"
                    width={510}
                    height={400}
                  />
                </div>
                <div className="col-lg-4 col-md-4 mt-6">
                  <div className="single-blog-posts">
                    <div className="single-blog-content dark:bg-zinc-800 rounded-xl">
                      <h2 className="text-xl mb-2 dark:text-white">
                        5 Cybersecurity Main Domains.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-6">
                  <div className="single-blog-posts">
                    <div className="single-blog-content dark:bg-zinc-800 rounded-xl">
                      <h2 className="text-xl mb-2 dark:text-white">
                        29 Cybersecurity Sub-Domains.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-6">
                  <div className="single-blog-posts">
                    <div className="single-blog-content dark:bg-zinc-800 rounded-xl">
                      <h2 className="text-xl mb-2 dark:text-white">
                        114 Cybersecurity Controls.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 mt-6">
                  <div className="single-blog-posts">
                    <div className="single-blog-content dark:bg-zinc-800 rounded-xl">
                      <p className="dark:text-white">
                        The controls outlined were developed after a
                        comprehensive review of all the legal, regulatory
                        requirements, global Cybersecurity best practices
                        analysis of Cybersecurity incidents, and attacks on
                        government establishments, and considering opinions of
                        various prominent business firms of the country. In
                        addition to the ECC Standard, the National Cyber
                        Security Authority of Saudi Arabia introduced Critical
                        Systems Cybersecurity Controls (CSCC) in the year 2019.
                        The NCA CSCC mandates the minimum Cybersecurity
                        requirements for critical systems within national
                        organizations.
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

export default Governance;
