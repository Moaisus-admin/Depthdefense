"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SolutionsIdentityManagement: React.FC = () => {
  return (
    <>
      <div className="blog-column-two-area pt-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 justify-center flex">
              <Image
                src="/images/solutions/solution-5.jpg"
                alt="Image"
                width={810}
                height={200}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                  <p className="dark:text-white">
                    Identity and Access Management (IAM) is a framework for
                    managing and controlling access to resources within an
                    organization. It involves managing the identities of users,
                    devices, and other entities that interact with an
                    organization’s systems, applications, and data.
                  </p>
                  <p className="dark:text-white">
                    IAM solutions provide centralized control over user access
                    to resources, and allow administrators to manage
                    authentication, authorization, and access control policies.
                    They enable organizations to enforce security policies,
                    maintain compliance, and reduce the risk of data breaches or
                    unauthorized access to sensitive resources.
                  </p>
                  <p className="dark:text-white">
                    IAM solutions typically include features such as user
                    provisioning, single sign-on (SSO), multi-factor
                    authentication (MFA), directory services, and identity
                    governance and administration (IGA), among others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsIdentityManagement;
