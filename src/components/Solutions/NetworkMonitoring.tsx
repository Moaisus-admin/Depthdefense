"use client";

import React from "react";
import Image from "next/image";

const SolutionsNetWorkM: React.FC = () => {
  return (
    <>
      <div className="blog-column-two-area pt-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 justify-center flex flex-wrap gap-4">
              <Image
                src="/images/solutions/NM.jpg"
                alt="Image"
                width={810}
                height={300}
              />
            </div>
            <div className="col-lg-12 col-md-12 mt-11">
              <div className="single-blog-posts">
                <div className="single-blog-content dark:bg-zinc-900 rounded-xl">
                  <p className="dark:text-white">
                    Lorem ipsum dolor sit amet consectetur. Purus facilisis
                    ultrices viverra malesuada tellus bibendum tortor felis.
                    Pellentesque mattis massa faucibus in arcu in eget et.
                    Turpis vel nunc venenatis dui. Risus enim fermentum ornare
                    nec in volutpat vestibulum neque nunc. In quis pharetra ac
                    phasellus commodo viverra tincidunt aenean. Vehicula
                    pulvinar quam magna in egestas amet purus pretium ipsum. Est
                    curabitur integer non nibh ante neque euismod. Purus mi Odio
                    enim termentum sollicitudin. Lorem ipsum dolor sit amet
                    consectetur. Purus facilisis ultrices viverra malesuada
                    tellus bibendum tortor felis.lorem ipsum dolor sit amet
                    consectetur. Purus facilisis ultrices viverra malesuada
                    tellus bibendum tortor felis. Pellentesque mattis massa
                    faucibus in arcu in eget et. Turpis vel nunc venenatis dui.
                    Risus enim fermentum ornare nec in volutpat vestibulum neque
                    nunc. In quis pharetra ac phasellus commodo viverra
                    tincidunt aenean.
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

export default SolutionsNetWorkM;
