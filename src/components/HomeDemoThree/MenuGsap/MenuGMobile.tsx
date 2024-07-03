import React, {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
} from "react";
import Link from "next/link";
import "./MenuGMobile.css";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

// Define types
type MenuLink = {
  path: string;
  label: string;
  children?: MenuLink[];
};

const menugmobileLinks: MenuLink[] = [
  { path: "/", label: "Home" },
  { path: "/about-us/", label: "About" },
  { path: "/contact/", label: "Contact" },
  {
    path: "#",
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
        path: "/services/risk-assessment/",
        label: "Risk Assessment",
      },
      {
        path: "/services/ransomware-assessment/",
        label: "Ransomware Assessment",
      },
      {
        path: "/services/compromised-assessment/",
        label: "Compromised Assessment",
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
      { path: "/services/ddos-simulation/", label: "DDoS Simulation" },
    ],
  },
];

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuGMobile: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { t } = useTranslation();
  const container = useRef<HTMLDivElement>(null);
  const [isMenuGOpen, setIsMenuGOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [submenuLinks, setSubmenuLinks] = useState<MenuLink[]>([]);
  const tl = useRef(gsap.timeline({ paused: true }));

  const toggleMenuG = () => {
    setIsMenuGOpen(!isMenuGOpen);
    // Reset submenus when closing the main menu
    if (!isMenuGOpen) {
      setActiveSubMenu(null);
      setSubmenuLinks([]);
    }
  };

  const toggleSubMenu = (label: string, children: MenuLink[] | undefined) => {
    if (activeSubMenu === label) {
      setActiveSubMenu(null);
      setSubmenuLinks([]);
    } else {
      setActiveSubMenu(label);
      setSubmenuLinks(children || []);
      // Update button states to ensure only one submenu can be expanded at a time
      const newButtonStates: { [key: string]: boolean } = {};
      menugmobileLinks.forEach((link) => {
        newButtonStates[link.label] = link.label === label;
      });
    }
  };

  useEffect(() => {
    if (submenuLinks.length > 0) {
      // Ensure animation for opening submenu
      gsap.from(".submenu .menug-link-item-holder", {
        opacity: 0,
        y: 50,
        duration: 0.3,
        stagger: 0.02,
        ease: "power4.out",
      });
    }
  }, [submenuLinks]);

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
        duration: 1,
        stagger: 0.2,
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
    const links = document.querySelectorAll(".submenu .menug-link-item-holder");

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
  }, [submenuLinks]);

  return (
    <div
      className={`menug-container ${isMenuGOpen ? "menug-open" : ""}`}
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
        <div className="menug-content col-lg-12 flex">
          <div className="menug-links col-lg-2">
            {menugmobileLinks.map((link, index) => (
              <div className="menug-link-item" key={index}>
                <div
                  className={`menug-link-item-holder ${
                    (link.label === "Solutions" || link.label === "Services") &&
                    activeSubMenu === link.label
                      ? "expanded"
                      : ""
                  } ${index < 5 ? "first-link services-link" : ""}`}
                  style={{ display: "flex", alignItems: "center" }} // Add this line
                >
                  {link.children && (
                    <button
                      className={
                        activeSubMenu === link.label
                          ? "minus-button"
                          : "plus-button"
                      }
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubMenu(link.label, link.children);
                      }}
                    >
                      <FaPlus
                        className={activeSubMenu !== link.label ? "" : "hidden"}
                      />
                      <FaMinus
                        className={activeSubMenu === link.label ? "" : "hidden"}
                      />
                    </button>
                  )}
                  <Link href={link.path} className="menug-link">
                    {t(link.label)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-8">
            <div className={`menug-links ${activeSubMenu ? "active" : ""}`}>
              <div className="menug-link-item">
                <div className="submenu">
                  {submenuLinks.map((childLink, childIndex) => (
                    <div className="menug-link-item" key={childIndex}>
                      <div className="menug-link-item-holder">
                        <Link
                          href={childLink.path}
                          className="menug-link submenu-link"
                        >
                          {t(childLink.label)}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuGMobile;
