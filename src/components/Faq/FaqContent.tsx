"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

const FaqContent: React.FC = () => {
  return (
    <>
      <div className="faq-area white-bg ptb-100 dark:bg-slate-900">
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
                    Frequently Asked Questions
                  </h2>
                  <span className="dark:text-white">
                    Just Find Your Answers Below
                  </span>
                </div>

                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          {" "}
                          What is a managed security service?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui in, illo blanditiis quisquam quam asperiores
                        veritatis, earum quibusdam laudantium distinctio dolore
                        placeat recusandae ratione maxime odit delectus nobis
                        doloribus quia Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Qui in, illo blanditiis
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          Why do we need cybersecurity?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui in, illo blanditiis quisquam quam asperiores
                        veritatis, earum quibusdam laudantium distinctio dolore
                        placeat recusandae ratione maxime odit delectus nobis
                        doloribus quia Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Qui in, illo blanditiis
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          What is theaa best way to learn cybersecurity?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui in, illo blanditiis quisquam quam asperiores
                        veritatis, earum quibusdam laudantium distinctio dolore
                        placeat recusandae ratione maxime odit delectus nobis
                        doloribus quia Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Qui in, illo blanditiis
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          How do i secure my computer?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui in, illo blanditiis quisquam quam asperiores
                        veritatis, earum quibusdam laudantium distinctio dolore
                        placeat recusandae ratione maxime odit delectus nobis
                        doloribus quia Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Qui in, illo blanditiis
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          What are theaa costs of a cyber attack?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui in, illo blanditiis quisquam quam asperiores
                        veritatis, earum quibusdam laudantium distinctio dolore
                        placeat recusandae ratione maxime odit delectus nobis
                        doloribus quia Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Qui in, illo blanditiis
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="dark:text-white">
                          How can i safely browse the internet?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui in, illo blanditiis quisquam quam asperiores
                        veritatis, earum quibusdam laudantium distinctio dolore
                        placeat recusandae ratione maxime odit delectus nobis
                        doloribus quia Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Qui in, illo blanditiis
                      </p>
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

export default FaqContent;
