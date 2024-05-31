"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PriceTable: React.FC = () => {
  return (
    <>
      <div className="pricing-area bg-color pt-100 pb-70 dark:bg-slate-900">
        <div className="container">
          <div className="section-title">
            <span>Security Packages</span>
            <h2 className="dark:text-white">
              We Have Different Types Of Pricing Plans
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing overly-one dark:bg-slate-800 dark:hover:bg-slate-950">
                <div className="overly-two dark:text-white">
                  <div className="pricing-title">
                    <h3>Basic</h3>
                    <h2>Free</h2>
                    <span>/ Per month</span>
                  </div>

                  <ul>
                    <li className=" dark:text-white">
                      30 Days Product Testing
                    </li>
                    <li className=" dark:text-white">
                      Upgrade Anytime Protection
                    </li>
                    <li className=" dark:text-white">
                      Unlimited Malware Removal
                    </li>
                    <li className=" dark:text-white">24/7 Live Assistance</li>
                    <li className=" dark:text-white">Scan Every 12 Hrs</li>
                    <li className=" dark:text-white">Configure Software</li>
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
              <div className="single-pricing overly-one active">
                <div className="overly-two">
                  <div className="pricing-title">
                    <h3>Popular</h3>
                    <h2>
                      <sub>$</sub>29
                    </h2>
                    <span>/ Per month</span>
                  </div>

                  <ul>
                    <li className=" dark:text-white">
                      40 Days Product Testing
                    </li>
                    <li className=" dark:text-white">
                      Upgrade Anytime Protection
                    </li>
                    <li className=" dark:text-white">
                      Unlimited Malware Removal
                    </li>
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
              <div className="single-pricing overly-one  dark:bg-slate-800 dark:hover:bg-slate-950">
                <div className="overly-two">
                  <div className="pricing-title dark:text-white">
                    <h3>Basic</h3>
                    <h2>
                      <sub>$</sub>59
                    </h2>
                    <span>/ Per month</span>
                  </div>

                  <ul>
                    <li className=" dark:text-white">
                      50 Days Product Testing
                    </li>
                    <li className=" dark:text-white">
                      Upgrade Anytime Protection
                    </li>
                    <li className=" dark:text-white">
                      Unlimited Malware Removal
                    </li>
                    <li className=" dark:text-white">24/7 Live Assistance</li>
                    <li className=" dark:text-white">Scan Every 14 Hrs</li>
                    <li className=" dark:text-white">Configure Software</li>
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
      </div>
    </>
  );
};

export default PriceTable;
