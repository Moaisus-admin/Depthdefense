"use client";

import React from "react";
import Image from "next/image";

const NetworkSecurity: React.FC = () => {
  return (
    <>
      <div className="blog-column-two-area ptb-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image
                src="/images/services/services-Aj.jpg"
                alt="Image"
                width={510}
                height={400}
              />
            </div>
            <div className="col-lg-6">
              <Image
                src="/images/services/services-Ak.jpg"
                alt="Image"
                width={510}
                height={400}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-[40px]">
              <div className="single-blog-posts">
                <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                  <p className="dark:text-white">
                    Network and security operations refer to the processes and
                    practices used by an organization to monitor, manage, and
                    secure their computer networks and systems. This includes
                    managing network infrastructure, monitoring network traffic,
                    detecting and responding to security threats, and ensuring
                    data protection and compliance with regulatory standards.
                    Network and security operations involve a combination of
                    hardware, software, and personnel, and typically include
                    tools such as firewalls, intrusion detection systems, and
                    security incident and event management (SIEM) platforms.
                    Effective network and security operations play a crucial
                    role in protecting an organization’s assets and maintaining
                    the integrity and reliability of their network and systems.
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

export default NetworkSecurity;
