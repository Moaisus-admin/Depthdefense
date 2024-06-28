"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const StructureCybersecurity: React.FC = () => {
  const { t } = useTranslation();
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
                  <h2 className="dark:text-white">{t("faqTitle")}</h2>
                </div>

                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          {" "}
                          {t("governanceRiskTitle")}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("isoCompliant")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" /> {t("cisControls")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" /> {t("annualPenTests")}{" "}
                        </div>
                      </div>

                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("privacyShield")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" /> {t("gdprCcpa")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("riskRegister")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("nistCompliant")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("ssaeCertified")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("sic")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("securityAuditReports")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("incidentResponse")}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          {t("platformSecurityTitle")}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("platformSecurityTitle")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" /> {t("antivirusServers")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("aesEncryption")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("segregatedAdVlans")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("privilegedAccountVaulting")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("vulnerabilityScanning")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("secureBackups")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("osHardening")}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          {t("endUserProtectionTitle")}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("cybersecurityTraining")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("multifactorAuthentication")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("roleBasedAccessControl")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("simulatedPhishing")}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          {t("securityInformationEventTitle")}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("rawLogs")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" /> {t("unifiedLogData")}
                        </div>{" "}
                      </div>
                      <div className="dark:text-white">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("userBehaviorAnalytics")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("anomalyDetection")}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          {t("perimeterSecurityTitle")}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("externalFirewalls")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("remoteAccess")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("spamFiltering")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("threatIntelFeeds")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("remoteAuthReporting")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("bruteForceDosDetection")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("dataCenterSecurity")}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          {t("endpointSecurityTitle")}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("patchManagement")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("antivirusEdR")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("remoteMonitoringManagement")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("localAdminPassword")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("fullDiskEncryption")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("mobileDeviceManagement")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("groupPolicyEnforcement")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("passwordComplexity")}
                        </div>
                      </div>
                      <div className="dark:text-white">
                        {" "}
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaStar className="mr-1" />
                          {t("bruteForcePrevention")}
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
