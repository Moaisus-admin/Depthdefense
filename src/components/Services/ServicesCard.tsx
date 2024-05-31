"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesCard: React.FC = () => {
  return (
    <>
      <div className="services-area pb-70 pt-100 dark:bg-zinc-800">
        <div className="container">
          <div className="section-title">
            <span className="text-3xl text-red-600">
              Cybersecurity Services
            </span>
            <h2 className="dark:text-white">
              You Can Protect Your Organization’s Cybersecurity by Services Us
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-A.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">
                      Cybersecurity Assessment
                    </Link>
                  </h3>
                  <p>A cybersecurity assessment is a process of. . .</p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-B.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">Malware Analysis</Link>
                  </h3>
                  <p>Malware analysis is the use of tools and. . .</p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-C.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">
                      Vulnerability Assessment and Penetration Testing
                    </Link>
                  </h3>
                  <p>
                    In the age of “Internet of Things”, we see a proliferation
                    of . . .
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-D.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">
                      Application Security Assessment
                    </Link>
                  </h3>
                  <p>
                    Application security assessment is the process of testing .
                    . .
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-E.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">Ransomware Assessment</Link>
                  </h3>
                  <p>
                    Ransomware preparedness assessment aims to identify. . .
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-F.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">DDoS Simulation</Link>
                  </h3>
                  <p>
                    A DDoS Simulation is an effort to make a system or network.
                    . .
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-G.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">Compromise Assessment</Link>
                  </h3>
                  <p>
                    Compromise assessments are high-level investigations where.
                    . .
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-H.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">Risk Assessment</Link>
                  </h3>
                  <p>IT security risk assessments focus on identifying. . .</p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-I.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">
                      Governance, Risk Management, and Compliance SAMA/CITC/NCA
                    </Link>
                  </h3>
                  <p>Governance, Risk Management, and Compliance. . .</p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-J.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">Forensic Analysis</Link>
                  </h3>
                  <p>
                    Forensic analysis definition can be described as a detailed.
                    . .
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-K.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">
                      Network & Security Operations
                    </Link>
                  </h3>
                  <p>
                    Network and security operations refer to the processes and.
                    . .
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-L.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">vCISO</Link>
                  </h3>
                  <p>
                    A vCISO (Virtual Chief Information Security Officer) is. . .
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-M.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">
                      Managed Security Services
                    </Link>
                  </h3>
                  <p>Managed Security Services (MSS) refer to. . .</p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-N.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">ISO 27001</Link>
                  </h3>
                  <p>
                    ISO27001 is an international standard that is used to. . .
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-I.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">PDPL</Link>
                  </h3>
                  <p>
                    The Personal Data Protection Law (PDPL) is the first. . .
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
