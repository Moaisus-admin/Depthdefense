"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const RelatedServices: React.FC = () => {
  return (
    <>
      <div className="related-post">
        <div className="title">
          <h2>Related Posts</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
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
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
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
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedServices;
