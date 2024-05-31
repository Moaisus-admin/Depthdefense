"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SolutionsNAC: React.FC = () => {
  return (
    <>
      <div className="blog-column-two-area pt-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4">
              <Image
                src="/images/solutions/NAC.jpg"
                alt="Image"
                width={910}
                height={400}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                  <p className="dark:text-white">
                    Network Access Control (NAC) is a security solution that
                    helps organizations control access to their network. NAC
                    solutions use various techniques to authenticate and
                    authorize users and devices that connect to a network,
                    ensuring that only authorized parties are granted access.
                    This can include methods such as checking the user’s
                    credentials, assessing the health and compliance of
                    connected devices, and requiring the installation of
                    security software before allowing access. NAC solutions can
                    help prevent unauthorized or malicious access to a network
                    and reduce the risk of security breaches.
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

export default SolutionsNAC;
