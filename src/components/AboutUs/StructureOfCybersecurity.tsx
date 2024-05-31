"use client";

import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import gsap from "gsap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

const StructureCybersecurity: React.FC = () => {
  return (
    <>
      <div className="faq-area white-bg ptb-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img">
                <Image
                  src="/images/faq-img.png"
                  alt="Image"
                  width={595}
                  height={569}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <div className="faq-title">
                  <h2 className="dark:text-white">
                    A birds Eyes view of Defense in Depth structure of
                    cybersecurity
                  </h2>
                </div>

                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          {" "}
                          Governance & Risk management
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          ISO 27002 Compliant
                        </div>
                      </div>
                      <div className="dark:text-white">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" /> Center for Internet
                          Security (CIS) Controls
                        </div>
                      </div>
                      <div className="dark:text-white">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" /> 3 Annual Pen Tests{" "}
                        </div>
                      </div>

                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Privacy Shield Certified
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" /> GOPR/CCPA Compliant{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Enterprice Risk Register{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          NIST SP 800-53 Compliant{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          SSAE 18 soCI Type 2 Certified{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Standard Information Cathering (SIC){" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Information Security Audit Reports{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Enterprice Incident Response{" "}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          Platform Security
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Next Generation Firewalls{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" /> Antivirus for Servers{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          AES 256 Encryption at Rest{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Segregated Active Directory & VLANS{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Privileged Account Vaulting{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Continuous Vulnerability Scanning & Patch Management{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Secure Data Backups and Disaster Recovery{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Operating Systems Hardening{" "}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          End User Protection
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          End User Protection Cybersecurity Awareness Training{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Multifactor Authentication{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Role-Based Access Constrol{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Simulated Pishing Campaigns{" "}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          Security Information Event Management
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Raw Logs, Endpoint Data &Network Traffic Analytics{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" /> Unified Log Data{" "}
                        </div>{" "}
                      </div>
                      <div className="dark:text-white">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          User Behavior Analytics (UBA){" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Suspicious Activity Detection & Alerts{" "}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          Perimeter security
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          External Firewalls{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Remote Access{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Spam Filtering{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Threat Intel Feeds{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Remote Authentication Reporting{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Brute Force and DoS Detection{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Data Center Physical Security{" "}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          Endpoint Security
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Automated Microsoft Windows and 3rd Party application
                          Patch Management{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Antivirus and Endpoint Detection &Response (EDR){" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Remote Monitoring & Management System{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Local Admin Password Solution{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Full Disk Encryption{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          Mobile Device Management{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Group Policy Enforcement{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Password Complexity{" "}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          Brute Force Prevention{" "}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-right-shape shape-three">
          <Image
            src="/images/faq-right-shape.png"
            alt="Image"
            width={130}
            height={224}
          />
        </div>
      </div>
    </>
  );
};

export default StructureCybersecurity;
