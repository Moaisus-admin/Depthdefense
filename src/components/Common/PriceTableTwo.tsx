"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const PriceTableTwo: React.FC = () => {
  return (
    <>
      <div className="pricing-area white-bg pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Security Packages</span>
            <h2>We have different types of pricing plans</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing overly-one">
                <div className="overly-two">
                  <div className="pricing-title">
                    <h3>Basic</h3>
                    <h2>Free</h2>
                    <span>/ Per month</span>
                  </div>

                  <ul>
                    <li>30 Days Product Testing</li>
                    <li>Upgrade Anytime Protection</li>
                    <li>Unlimited Malware Removal</li>
                    <li>24/7 Live Assistance</li>
                    <li>Scan Every 12 Hrs</li>
                    <li>Configure Software</li>
                  </ul>

                  <Link href="/register" className="default-btn">
                    <span>Register Now</span>
                  </Link>

                  <div className="pricing-shape">
                    <Image
                      src="/images/pricing-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>

                  <div className="pricing-shape-2">
                    <Image
                      src="/images/pricing-shape-2.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing overly-one">
                <div className="overly-two">
                  <div className="pricing-title">
                    <h3>Popular</h3>
                    <h2>
                      <sub>$</sub>29
                    </h2>
                    <span>/ Per month</span>
                  </div>

                  <ul>
                    <li>40 Days Product Testing</li>
                    <li>Upgrade Anytime Protection</li>
                    <li>Unlimited Malware Removal</li>
                    <li>24/7 Live Assistance</li>
                    <li>Scan Every 13 Hrs</li>
                    <li>Configure Software</li>
                  </ul>

                  <Link href="/register" className="default-btn">
                    <span>Register Now</span>
                  </Link>

                  <div className="pricing-shape">
                    <Image
                      src="/images/pricing-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>

                  <div className="pricing-shape-2">
                    <Image
                      src="/images/pricing-shape-2.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-pricing overly-one">
                <div className="overly-two">
                  <div className="pricing-title">
                    <h3>Basic</h3>
                    <h2>
                      <sub>$</sub>59
                    </h2>
                    <span>/ Per month</span>
                  </div>

                  <ul>
                    <li>50 Days Product Testing</li>
                    <li>Upgrade Anytime Protection</li>
                    <li>Unlimited Malware Removal</li>
                    <li>24/7 Live Assistance</li>
                    <li>Scan Every 14 Hrs</li>
                    <li>Configure Software</li>
                  </ul>

                  <Link href="/register" className="default-btn">
                    <span>Register Now</span>
                  </Link>

                  <div className="pricing-shape">
                    <Image
                      src="/images/pricing-shape.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>

                  <div className="pricing-shape-2">
                    <Image
                      src="/images/pricing-shape-2.png"
                      alt="Image"
                      width={230}
                      height={202}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-shape shape-three">
          <Image
            src="/images/pricing-right-shape.png"
            alt="Image"
            width={210}
            height={114}
          />
        </div>
      </div>
    </>
  );
};

export default PriceTableTwo;
