"use client";
  
import React from "react";
import Link from "next/link";

const ServiceSidebar: React.FC = () => {
  return (
    <>
      <div className="services-sidebar">
        <div className="services-category">
          <ul>
            <li>
              <Link href="/services/details">
                Cybersecurity <i className="bx bx-chevron-right"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Network Security
                <i className="bx bx-chevron-right"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Threat Hunter
                <i className="bx bx-chevron-right"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Incident Responder
                <i className="bx bx-chevron-right"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Secure Managed IT
                <i className="bx bx-chevron-right"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Server Monitoring
                <i className="bx bx-chevron-right"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Penetration Testing
                <i className="bx bx-chevron-right"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="services-pdf">
          <ul>
            <li>
              <a href="#">
                <i className="bx bxs-file-pdf"></i>
                PDF Download
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-file-doc"></i>
                DOC Download
              </a>
            </li>
          </ul>
        </div>

        <div className="services-contact mb-30">
          <h3>Contact us to do Your New Projects</h3>

          <Link href="/contact" className="default-btn">
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceSidebar;
