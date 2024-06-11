"use client";

import React from "react";
import Image from "next/image";

const SolutionsDigitalRights: React.FC = () => {
  return (
    <>
      <div className="blog-column-two-area pt-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4">
              <Image
                src="/images/solutions/DR.jpg"
                alt="Image"
                width={910}
                height={300}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                  <p className="dark:text-white">
                    Digital Rights Management (DRM) refers to the techniques and
                    technologies used to control access and usage of digital
                    content and software. It is a system that is typically
                    implemented by content creators and publishers to protect
                    their intellectual property from unauthorized reproduction,
                    distribution, or copying. DRM may involve encrypting digital
                    media, controlling access through digital keys, or limiting
                    the number of devices that can access the content or
                    software. It enables copyright holders to safeguard their
                    rights and ensure that they receive payment for their works.
                    However, DRM has also been criticized for potentially
                    restricting user rights, making it difficult to use legally
                    purchased content across different devices, and hindering
                    innovation.
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

export default SolutionsDigitalRights;
