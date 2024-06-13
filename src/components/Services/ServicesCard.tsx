"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

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
              <Typewriter
                words={[
                  "You Can Protect Your Organization’s Cybersecurity by Services Us",
                ]}
                loop={1}
                cursor
                cursorStyle=""
                typeSpeed={20}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/cybersecurity-assessment">
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
                    <Link href="/services/cybersecurity-assessment">
                      Cybersecurity Assessment
                    </Link>
                  </h3>
                  <p>A cybersecurity assessment is a process of. . .</p>

                  <Link
                    href="/services/cybersecurity-assessment"
                    className="read-more"
                  >
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/malware-analysis">
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
                    <Link href="/services/malware-analysis">
                      Malware Analysis
                    </Link>
                  </h3>
                  <p>Malware analysis is the use of tools and. . .</p>

                  <Link href="/services/malware-analysis" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/vulnerability-assessment-penetration-testing">
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
                    <Link href="/services/vulnerability-assessment-penetration-testing">
                      Vulnerability Assessment and Penetration Testing
                    </Link>
                  </h3>
                  <p>
                    In the age of “Internet of Things”, we see a proliferation
                    of . . .
                  </p>

                  <Link
                    href="/services/vulnerability-assessment-penetration-testing"
                    className="read-more"
                  >
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/application-security-assessment">
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
                    <Link href="/services/application-security-assessment">
                      Application Security Assessment
                    </Link>
                  </h3>
                  <p>
                    Application security assessment is the process of testing .
                    . .
                  </p>

                  <Link
                    href="/services/application-security-assessment"
                    className="read-more"
                  >
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/ransomware-assessment">
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
                    <Link href="/services/ransomware-assessment">
                      Ransomware Assessment
                    </Link>
                  </h3>
                  <p>
                    Ransomware preparedness assessment aims to identify. . .
                  </p>

                  <Link
                    href="/services/ransomware-assessment"
                    className="read-more"
                  >
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/ddos-simulation">
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
                    <Link href="/services/ddos-simulation">
                      DDoS Simulation
                    </Link>
                  </h3>
                  <p>
                    A DDoS Simulation is an effort to make a system or network.
                    . .
                  </p>

                  <Link href="/services/ddos-simulation" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/compromised-assessment">
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
                    <Link href="/services/compromised-assessment">
                      Compromise Assessment
                    </Link>
                  </h3>
                  <p>
                    Compromise assessments are high-level investigations where.
                    . .
                  </p>

                  <Link
                    href="/services/compromised-assessment"
                    className="read-more"
                  >
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/risk-assessment">
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
                    <Link href="/services/risk-assessment">
                      Risk Assessment
                    </Link>
                  </h3>
                  <p>IT security risk assessments focus on identifying. . .</p>

                  <Link href="/services/risk-assessment" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/governance-risk-management-and-compliance-sama-citc-nca">
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
                    <Link href="/services/governance-risk-management-and-compliance-sama-citc-nca">
                      Governance, Risk Management, and Compliance SAMA/CITC/NCA
                    </Link>
                  </h3>
                  <p>Governance, Risk Management, and Compliance. . .</p>

                  <Link
                    href="/services/governance-risk-management-and-compliance-sama-citc-nca"
                    className="read-more"
                  >
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/forensic-analysis">
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
                    <Link href="/services/forensic-analysis">
                      Forensic Analysis
                    </Link>
                  </h3>
                  <p>
                    Forensic analysis definition can be described as a detailed.
                    . .
                  </p>

                  <Link
                    href="/services/forensic-analysis"
                    className="read-more"
                  >
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/network-security-operations-noc-soc">
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
                    <Link href="/services/network-security-operations-noc-soc">
                      Network & Security Operations
                    </Link>
                  </h3>
                  <p>
                    Network and security operations refer to the processes and.
                    . .
                  </p>

                  <Link
                    href="/services/network-security-operations-noc-soc"
                    className="read-more"
                  >
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/vciso">
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
                    <Link href="/services/vciso">vCISO</Link>
                  </h3>
                  <p>
                    A vCISO (Virtual Chief Information Security Officer) is. . .
                  </p>

                  <Link href="/services/vciso" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/managed-security-services">
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
                    <Link href="/services/managed-security-services">
                      Managed Security Services
                    </Link>
                  </h3>
                  <p>Managed Security Services (MSS) refer to. . .</p>

                  <Link
                    href="/services/managed-security-services"
                    className="read-more"
                  >
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/iso-27001">
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
                    <Link href="/services/iso-27001">ISO 27001</Link>
                  </h3>
                  <p>
                    ISO27001 is an international standard that is used to. . .
                  </p>

                  <Link href="/services/iso-27001" className="read-more">
                    Read more <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/pdpl">
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
                    <Link href="/services/pdpl">PDPL</Link>
                  </h3>
                  <p>
                    The Personal Data Protection Law (PDPL) is the first. . .
                  </p>

                  <Link href="/services/pdpl" className="read-more">
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
