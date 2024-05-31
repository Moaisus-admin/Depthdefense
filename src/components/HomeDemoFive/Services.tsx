"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70 dark:bg-slate-800 ">
        <div className="container">
          <div className="section-title">
            <span>Cybersecurity Services</span>
            <h2 className="dark:text-white">
              You Can Protect Your Organization’s Cybersecurity By Services Us
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-1.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">Website Scanning</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed
                    do.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-2.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">Malware Removal</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed
                    do.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-3.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">Cloud Security</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed
                    do.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-services">
                <div className="services-img">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-4.jpg"
                      alt="Image"
                      width={550}
                      height={650}
                    />
                  </Link>
                </div>

                <div className="services-content">
                  <h3>
                    <Link href="/services/details">Data Protection</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed
                    do.
                  </p>

                  <Link href="/services/details" className="read-more">
                    Read More <i className="flaticon-right-arrow"></i>
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

export default Services;
