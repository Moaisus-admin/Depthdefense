"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNewsTwo: React.FC = () => {
  return (
    <>
      <div className="blog-area blog-area-four pb-70 dark:bg-slate-800">
        <div className="container">
          <div className="section-title">
            <span className="dark:text-white">Latest News</span>
            <h2 className="dark:text-white">
              Read The Latest Articles From Us
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-1.jpg"
                      alt="Image"
                      width={390}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="blog-content">
                  <span>September 20, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      The Security Risks of Changing Package Owners
                    </Link>
                  </h3>

                  <Link href="/blog/details" className="read-more">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-2.jpg"
                      alt="Image"
                      width={390}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="blog-content">
                  <span>September 19, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      Tips to Protecting Your Business and Family
                    </Link>
                  </h3>

                  <Link href="/blog/details" className="read-more">
                    Read More <i className="flaticon-right-arrow"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-3.jpg"
                      alt="Image"
                      width={390}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="blog-content">
                  <span>September 18, 2024</span>
                  <h3>
                    <Link href="/blog/details">
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>

                  <Link href="/blog/details" className="read-more">
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

export default LatestNewsTwo;
