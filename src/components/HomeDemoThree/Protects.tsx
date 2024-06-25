"use client";

import React from "react";
import Image from "next/image";

const Protects: React.FC = () => {
  return (
    <>
      <div className="protect-area protect-area-three pt-100 pb-70 dark:bg-zinc-500">
        <div className="container">
          <div className="section-title">
            <span className="text-2xl dark:text-white">
              Cyber Security Protect
            </span>
            <h2 className="dark:text-white">
              Protect Your Website, Web Server And Web Application From Hacker
              Threats
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-challenges overly-one dark:bg-zinc-600">
                <div className="overly-two">
                  <i className="flaticon-database"></i>
                  <h3 className="dark:text-white">Database Security</h3>
                  <p className="dark:text-white">
                    Implement robust encryption and access controls to safeguard
                    sensitive data.
                  </p>
                  <span className="flaticon-database"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-challenges overly-one dark:bg-zinc-600">
                <div className="overly-two">
                  <i className="flaticon-application"></i>
                  <h3 className="dark:text-white">Application Security</h3>
                  <p className="dark:text-white">
                    Secure your applications with comprehensive code reviews and
                    regular security testing.
                  </p>
                  <span className="flaticon-application"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-challenges overly-one dark:bg-zinc-600">
                <div className="overly-two">
                  <i className="flaticon-security"></i>
                  <h3 className="dark:text-white">Web Security</h3>
                  <p className="dark:text-white">
                    Secure your website with HTTPS, strong authentication, and
                    regular vulnerability assessments.
                  </p>
                  <span className="flaticon-security"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-challenges overly-one dark:bg-zinc-600">
                <div className="overly-two">
                  <i className="flaticon-security-1"></i>
                  <h3 className="dark:text-white">Server Security</h3>
                  <p className="dark:text-white">
                    Strengthen server defenses with firewalls, regular patches,
                    and intrusion detection systems.
                  </p>
                  <span className="flaticon-security-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="protect-left-shape shape-three">
          <Image
            src="/images/protect-left-shape.png"
            alt="Image"
            width={142}
            height={148}
          />
        </div>
      </div>
    </>
  );
};

export default Protects;
