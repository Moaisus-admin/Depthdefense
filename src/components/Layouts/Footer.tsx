"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100 pb-70 jarallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="/" className="logo">
                  <Image
                    src="/images/Depth-logo-1.jpg"
                    alt="Image"
                    width={150}
                    height={42}
                  />
                </Link>

                <p>
                  Depth defense is Saudi based company with panache to deliver
                  competitive & quality cyber consulting services with ease.
                </p>

                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="address">
                  <li className="location">
                    <i className="bx bxs-location-plus"></i>
                    Khalid Al Hakim Road, Ar Rabwah Dist, Riyadh, Kingdom of
                    Saudi Arabia.
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a href="mailto:info@depthdefense.com">
                      info@depthdefense.com
                    </a>
                    <a href="#" target="_blank"></a>
                  </li>
                  <li>
                    <i className="bx bxs-phone-call"></i>
                    <a href="tel:966-539006060">966-539006060</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Services</h3>

                <ul className="import-link">
                  <li>
                    <Link href="/solutions/details">Secure Private Cloud</Link>
                  </li>
                  <li>
                    <Link href="/solutions/details">Online Backup</Link>
                  </li>
                  <li>
                    <Link href="/solutions/details">Secure Websites</Link>
                  </li>
                  <li>
                    <Link href="/solutions/details">Cyber-Security</Link>
                  </li>
                  <li>
                    <Link href="/solutions/details">Enterprise Networks</Link>
                  </li>
                  <li>
                    <Link href="/solutions/details">Collaboration</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Resources</h3>

                <ul className="import-link">
                  <li>
                    <Link href="/services/details">
                      Cybersecurity Strategies
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/details">Security Advisories</Link>
                  </li>
                  <li>
                    <Link href="/services/details">Security News</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/solutions">Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/contact">User Guides</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy-right-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright &copy; {currentYear} Copy Right{" "}
                <span className="text-red-500">Depth Defence</span>
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul className="footer-menu">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li className="text-white">Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
