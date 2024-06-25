"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const ServicesCard: React.FC = () => {
  return (
    <>
      <div className="services-area pb-70 pt-100 dark:bg-zinc-700">
        <div className="container">
          <div className="section-title">
            <span className="text-3xl text-red-600">
              Cybersecurity Solutions
            </span>
            <h2 className="dark:text-white">
              <Typewriter
                words={[
                  "Discover our range of innovative solutions designed to meet your needs and enhance your experience.",
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
                  <Link href="/solutions/siem-security-information-and-event-management">
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
                    <Link href="/solutions/siem-security-information-and-event-management">
                      SIEM (Security Information and Event Management)
                    </Link>
                  </h3>
                  <p>SIEM stands for Security Information and Event . . . .</p>

                  <Link
                    href="/solutions/siem-security-information-and-event-management"
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
                  <Link href="/solutions/endpoint-protection-edr-xdr-ndr/">
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
                    <Link href="/solutions/endpoint-protection-edr-xdr-ndr/">
                      End Point Protection EDR,XDR,NDR
                    </Link>
                  </h3>
                  <p>
                    Endpoint Detection and Response (EDR) is a security . . .
                  </p>

                  <Link
                    href="/solutions/endpoint-protection-edr-xdr-ndr/"
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
                  <Link href="/solutions/nextgen-firewalls-waf-web-application-firewall/">
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
                    <Link href="/solutions/nextgen-firewalls-waf-web-application-firewall/">
                      Next Gen Firewall & WAF
                    </Link>
                  </h3>
                  <p>
                    Next Generation Firewalls (NGFW) refers to advanced . . .
                  </p>

                  <Link
                    href="/solutions/nextgen-firewalls-waf-web-application-firewall/"
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
                  <Link href="/solutions/iam-identity-and-access-management/">
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
                    <Link href="/solutions/iam-identity-and-access-management/">
                      Identity and Access Management
                    </Link>
                  </h3>
                  <p>Identity and Access Management (IAM) is a . . .</p>

                  <Link
                    href="/solutions/iam-identity-and-access-management/"
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
                  <Link href="/solutions/pam-privileged-access-management/">
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
                    <Link href="/solutions/pam-privileged-access-management/">
                      Privilege Access Management
                    </Link>
                  </h3>
                  <p>
                    Privilege Access Management (PAM) refers to the set of . . .
                  </p>

                  <Link
                    href="/solutions/pam-privileged-access-management/"
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
                  <Link href="/solutions/nac-network-access-control/">
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
                    <Link href="/solutions/nac-network-access-control/">
                      Network Access Control
                    </Link>
                  </h3>
                  <p>
                    Network Access Control (NAC) is a security solution that . .
                  </p>

                  <Link
                    href="/solutions/nac-network-access-control/"
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
                  <Link href="/solutions/security-intelligence-threat-intelligence/">
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
                    <Link href="/solutions/security-intelligence-threat-intelligence/">
                      Security Intelligence / Threat Intelligence
                    </Link>
                  </h3>
                  <p>
                    Threat Intelligence is the collection, analysis, and . . .
                  </p>

                  <Link
                    href="/solutions/security-intelligence-threat-intelligence/"
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
                  <Link href="/solutions/advanced-persistent-threat-apt/">
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
                    <Link href="/solutions/advanced-persistent-threat-apt/">
                      Advanced Persistent Threat
                    </Link>
                  </h3>
                  <p>
                    An Advanced Persistent Threat (APT) is a targeted cyber . .
                    .
                  </p>

                  <Link
                    href="/solutions/advanced-persistent-threat-apt/"
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
                  <Link href="/solutions/breach-attack-simulation-solution/">
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
                    <Link href="/solutions/breach-attack-simulation-solution/">
                      Breach & Attack Simulation Solution
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Purus facilisis . .
                    .
                  </p>

                  <Link
                    href="/solutions/breach-attack-simulation-solution/"
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
                  <Link href="/solutions/network-monitoring-protection/">
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
                    <Link href="/solutions/network-monitoring-protection/">
                      Network Monitoring & Protection
                    </Link>
                  </h3>
                  <p>
                    Network and security operations refer to the processes and
                    practices used . .
                  </p>

                  <Link
                    href="/solutions/network-monitoring-protection/"
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
                  <Link href="/solutions/patch-management-vulnerability-management-tools/">
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
                    <Link href="/solutions/patch-management-vulnerability-management-tools/">
                      Patch Management & Vulnerability Management
                    </Link>
                  </h3>
                  <p>Patch management is the process of identifying . . .</p>

                  <Link
                    href="/solutions/patch-management-vulnerability-management-tools/"
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
                  <Link href="/solutions/digital-rights-management/">
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
                    <Link href="/solutions/digital-rights-management/">
                      Digital Rights Management
                    </Link>
                  </h3>
                  <p>Digital Rights Management (DRM) refers to the . . .</p>

                  <Link
                    href="/solutions/digital-rights-management/"
                    className="read-more"
                  >
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
