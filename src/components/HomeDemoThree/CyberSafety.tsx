"use client";

import React from "react";
import Image from "next/image";

const CyberSafety: React.FC = () => {
  return (
    <>
      <div className="safety-area pt-100 pb-70 dark:bg-zinc-500">
        <div className="container">
          <div className="section-title">
            <span className="text-3xl dark:text-white">Cyber Safety</span>
            <h2 className="dark:text-white">
              How Can We Keep Uur Website Safe FRom Cyber Crimes
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one dark:bg-zinc-600 dark:hover:bg-zinc-700">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-1.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3 className="dark:text-white">Check Website Url</h3>
                  <p className="dark:text-white">
                    Verify website URLs to prevent phishing attacks and ensure
                    secure browsing. Stay vigilant by checking URLs to avoid
                    malicious websites
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one dark:bg-zinc-600 dark:hover:bg-zinc-700">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-2.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3 className="dark:text-white">
                    Check Emails Before Opening Them
                  </h3>
                  <p className="dark:text-white">
                    Exercise caution with emails; inspect links and attachments
                    before opening. Prevent phishing by scrutinizing email
                    content and authenticity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one dark:bg-zinc-600 dark:hover:bg-zinc-700">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-3.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3 className="dark:text-white">Remember To Log Off</h3>
                  <p className="dark:text-white">
                    Protect your session by logging off after using online
                    services. Enhance security by logging out of accounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one dark:bg-zinc-600 dark:hover:bg-zinc-700">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-4.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3 className="dark:text-white">Choose Strong Passwords</h3>
                  <p className="dark:text-white">
                    Create strong, unique passwords to fortify account security.
                    Secure your accounts with complex passwords.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one dark:bg-zinc-600 dark:hover:bg-zinc-700">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-5.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3 className="dark:text-white">
                    Shop Safety In Trusted Websites
                  </h3>
                  <p className="dark:text-white">
                    Shop securely on trusted websites to safeguard your
                    financial information. Ensure safe online shopping by
                    verifying credibility of platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-safety overly-one dark:bg-zinc-600 dark:hover:bg-zinc-700">
                <div className="overly-two">
                  <Image
                    src="/images/safety-icon/icon-6.png"
                    alt="Image"
                    width={105}
                    height={88}
                  />
                  <h3 className="dark:text-white">Update Your Antivirus</h3>
                  <p className="dark:text-white">
                    Keep your antivirus up to date for protection against cyber
                    threats. Enhance device's security by regularly updating
                    antivirus and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="safety-shape-1 shape-three">
          <Image
            src="/images/cyberr2.png"
            alt="Image"
            width={257}
            height={152}
          />
        </div>
        <div className="safety-shape-2 shape-three">
          <Image
            src="/images/safety-shape-2.png"
            alt="Image"
            width={137}
            height={51}
          />
        </div>
        <div className="safety-shape-3 shape-three">
          <Image
            src="/images/safety-shape-3.png"
            alt="Image"
            width={170}
            height={109}
          />
        </div>
      </div>
    </>
  );
};

export default CyberSafety;
