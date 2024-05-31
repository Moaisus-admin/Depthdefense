"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-area pb-70">
        <div className="container">
          <div className="section-title">
            <span>Latest News</span>
            <h2>Read The Latest Articles From Us</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-4.jpg"
                      alt="Image"
                      width={810}
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
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-5.jpg"
                      alt="Image"
                      width={810}
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
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="blog-img">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog-6.jpg"
                      alt="Image"
                      width={810}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
