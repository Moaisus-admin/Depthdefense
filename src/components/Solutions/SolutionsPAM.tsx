"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SolutionsPAM: React.FC = () => {
  return (
    <>
      <div className="blog-column-two-area pt-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4">
              <Image
                src="/images/solutions/PAM-1.jpg"
                alt="Image"
                width={610}
                height={200}
              />
              <Image
                src="/images/solutions/PAM-2.jpg"
                alt="Image"
                width={610}
                height={200}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                  <p className="dark:text-white">
                    Privilege Access Management (PAM) refers to the set of
                    processes, tools, and policies designed to manage and
                    control privileged user access in an organization. PAM is
                    aimed at identifying and controlling privileged users, their
                    access levels, and privileges within a system or network.
                    This includes activities such as managing passwords,
                    restricting access to sensitive systems, enforcing user
                    accountability, and monitoring user activity. The goal of
                    PAM is to reduce the risk of data breaches and protect
                    critical assets by limiting access to only authorized users
                    who require privileged access to perform their duties.
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

export default SolutionsPAM;
