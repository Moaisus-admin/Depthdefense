import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap";

const additionalSolutions = [
  {
    path: "/solutions/",
    label: "Solutions",
    children: [
      {
        label: "Privilege Access Management",
        path: "/solutions/pam-privileged-access-management/",
      },
      {
        label: "IAM(Identity and Access Management)",
        path: "/solutions/iam-identity-and-access-management/",
      },
      {
        label: "SIEM (Security Information and Event Management)",
        path: "/solutions/siem-security-information-and-event-management",
      },
      {
        label: "End Point Protection EDR,XDR,NDR",
        path: "/solutions/endpoint-protection-edr-xdr-ndr/",
      },
      {
        label: "Next Gen Firewall & WAF",
        path: "/solutions/nextgen-firewalls-waf-web-application-firewall/",
      },
      {
        label: "Network Access Control",
        path: "/solutions/nac-network-access-control/",
      },
      {
        label: "Security Intelligence / Threat Intelligence",
        path: "/solutions/security-intelligence-threat-intelligence/",
      },
      {
        label: "Advanced Persistent Threat",
        path: "/solutions/advanced-persistent-threat-apt/",
      },
      {
        label: "Breach & Attack Simulation Solution",
        path: "/solutions/breach-attack-simulation-solution/",
      },
      {
        label: "Network Monitoring & Protection",
        path: "/solutions/network-monitoring-protection/",
      },
      {
        label: "Patch Management & Vulnerability Management",
        path: "/solutions/patch-management-vulnerability-management-tools/",
      },
      {
        label: "Digital Rights Management",
        path: "/solutions/digital-rights-management/",
      },
    ],
  },
];

const additionalServices = [
  {
    path: "#",
    label: "Services",
    children: [
      { path: "/services/pdpl/", label: "PDPL" },
      { path: "/services/iso-27001/", label: "ISO 27001" },
      {
        path: "/services/governance-risk-management-and-compliance-sama-citc-nca/",
        label: "Governance, Risk Management, and Compliance",
      },
      {
        path: "/services/cybersecurity-assessment/",
        label: "Cybersecurity Assessment",
      },
      {
        path: "/services/vulnerability-assessment-penetration-testing/",
        label: "Vulnerability Assessment & Penetration Testing",
      },
      { path: "/services/malware-analysis/", label: "Malware Analysis" },
      {
        path: "/services/application-security-assessment/",
        label: "Application Security Assessment",
      },
      {
        path: "/services/ransomware-assessment/",
        label: "Ransomware Assessment",
      },
      {
        path: "/services/compromise-assessment/",
        label: "Compromise Assessment",
      },
      { path: "/services/forensic-analysis/", label: "Forensic Analysis" },
      {
        path: "/services/network-security-operations-noc-soc/",
        label: "Network & Security Operations",
      },
      { path: "/services/vciso/", label: "vCISO" },
      {
        path: "/services/managed-security-services/",
        label: "Managed Security Services",
      },
    ],
  },
];

const menugLinks = [
  { path: "/", label: "Home" },
  { path: "/about-us/", label: "About" },
  { path: "/contact/", label: "Contact" },
];

const MenuG = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuGOpen, setIsMenuGOpen] = useState(false);

  const tl = useRef(gsap.timeline({ paused: true }));

  const toggleMenuG = () => {
    setIsMenuGOpen(!isMenuGOpen);
  };

  useEffect(() => {
    gsap.set(".menug-link-item-holder", { opacity: 0, y: 75 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(".menug-overlay", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menug-link-item-holder", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power4.inOut",
        delay: -0.75,
      });
  }, []);

  useEffect(() => {
    if (isMenuGOpen) {
      tl.current.play();
      document.body.classList.add("no-scroll");
    } else {
      tl.current.reverse();
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuGOpen]);

  useEffect(() => {
    const links = document.querySelectorAll(
      ".menug-link-item-holder:not(.first-link)"
    );

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { scale: 0.9, duration: 0.3, ease: "power1.inOut" });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: "power1.inOut" });
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {
          gsap.to(link, { scale: 1.1, duration: 0.3, ease: "power1.inOut" });
        });

        link.removeEventListener("mouseleave", () => {
          gsap.to(link, { scale: 1, duration: 0.3, ease: "power1.inOut" });
        });
      });
    };
  }, [isMenuGOpen]);

  return (
    <div
      className={`menug-container w-fit ${isMenuGOpen ? "menug-open" : ""}`}
      ref={container}
    >
      <div className="menug-bar w-fit">
        <div className="menug-toggle" onClick={toggleMenuG}>
          <div className="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="menug-overlay-bar"></div>
      <div className="menug-overlay">
        <div className="menug-content col-lg-12 flex gap-4">
          <div className="menug-links col-lg-2">
            {menugLinks.map((link, index) => (
              <div className="menug-link-item" key={index}>
                <div
                  className={`menug-link-item-holder ${
                    index < 5 ? "first-link services-link" : ""
                  } ${link.label.toLowerCase()}-link`} /* Unique class for each link */
                >
                  <Link href={link.path} className="menug-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="menug-additional-content col-lg-5">
            <div className="menug-links">
              <div className="menug-link-item">
                <div className="menug-link-item-holder first-link services-link">
                  <span className="menug-link additional-services-heading">
                    {additionalServices[0].label}
                  </span>
                  {additionalServices[0].children && (
                    <div className="submenu">
                      {additionalServices[0].children.map(
                        (childLink, childIndex) => (
                          <div className="menug-link-item" key={childIndex}>
                            <div className="menug-link-item-holder">
                              <Link
                                href={childLink.path}
                                className="menug-link submenu-link"
                              >
                                {childLink.label}
                              </Link>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="menug-additional-content col-lg-5">
            <div className="menug-links">
              <div className="menug-link-item">
                <div className="menug-link-item-holder first-link services-link">
                  <span className="menug-link additional-solutions-heading">
                    {additionalSolutions[0].label}
                  </span>
                  {additionalSolutions[0].children && (
                    <div className="submenu">
                      {additionalSolutions[0].children.map(
                        (childLink, childIndex) => (
                          <div className="menug-link-item" key={childIndex}>
                            <div className="menug-link-item-holder">
                              <Link
                                href={childLink.path}
                                className="menug-link submenu-link"
                              >
                                {childLink.label}
                              </Link>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuG;
