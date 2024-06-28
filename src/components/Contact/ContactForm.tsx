"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Button animations
    const button = buttonRef.current;
    if (button) {
      button.addEventListener("mouseover", () => {
        gsap.to(button, {
          duration: 0.3,
          scale: 1.2,

          ease: "power1.out",
        });
      });
      button.addEventListener("mouseout", () => {
        gsap.to(button, {
          duration: 0.3,
          scale: 1,
          rotation: 0,
          ease: "power1.out",
        });
      });
    }

    // Input animations
    const animateInput = (input: HTMLInputElement | null) => {
      if (input) {
        input.addEventListener("focus", () => {
          gsap.to(input, {
            duration: 0.3,
            ease: "power1.out",
            border: "1px solid #333",
            boxShadow: "0 0 10px #9ecaed",
          });
        });
        input.addEventListener("blur", () => {
          gsap.to(input, {
            duration: 0.3,
            ease: "power1.out",
            border: "1px solid #ccc",
            boxShadow: "none",
          });
        });
      }
    };

    animateInput(nameInputRef.current);
    animateInput(emailInputRef.current);
    // Call animateInput for more refs as needed
    const card = cardRef.current;
    if (card) {
      card.addEventListener("mouseover", () => {
        gsap.to(card, {
          duration: 1,
          scale: 1.1, // Increase the scale as needed
          ease: "power1.out",
        });
      });
      card.addEventListener("mouseout", () => {
        gsap.to(card, {
          duration: 1,
          scale: 1,
          ease: "power1.out",
        });
      });
    }
  }, []);
  return (
    <>
      <div className="main-contact-area ptb-100 dark:bg-zinc-800 text-black">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="contact-wrap">
                <div className="contact-form">
                  <div className="contact-title">
                    <h2 className="dark:text-white">
                      <Typewriter
                        key={t("sendMessage")}
                        words={[t("sendMessage")]}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </h2>
                  </div>

                  <form id="contactForm">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="dark:text-white">
                            {" "}
                            {t("nameLabel")}
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control dark:text-white rounded-3xl"
                            placeholder={t("namePlaceholder")}
                            ref={nameInputRef}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="dark:text-white">
                            {t("emailLabel")}
                          </label>
                          <input
                            type="text"
                            name="email"
                            className="form-control dark:text-white rounded-3xl"
                            placeholder={t("emailPlaceholder")}
                            ref={emailInputRef}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="dark:text-white">
                            {t("phoneLabel")}
                          </label>
                          <input
                            type="text"
                            name="number"
                            className="form-control dark:text-white rounded-3xl"
                            placeholder={t("phonePlaceholder")}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label className="dark:text-white">
                            {" "}
                            {t("subjectLabel")}
                          </label>
                          <input
                            type="text"
                            name="subject"
                            className="form-control dark:text-white rounded-3xl"
                            placeholder={t("subjectPlaceholder")}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label className="dark:text-white">
                            {" "}
                            {t("messageLabel")}
                          </label>
                          <textarea
                            name="text"
                            className="form-control dark:text-white rounded-2xl"
                            cols={30}
                            rows={5}
                            placeholder={t("messagePlaceholder")}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-sm-12">
                        <button
                          type="submit"
                          className="default-btn btn-two rounded-full"
                          ref={buttonRef}
                        >
                          {t("submitButton")}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 dark:bg-zinc-700 rounded-xl" ref={cardRef}>
              <div className="contact-info">
                <h3 className="dark:text-white">{t("contactDetailsTitle")}</h3>

                <ul className="address">
                  <li className="location">
                    <i className="bx bxs-location-plus"></i>
                    <span className="dark:text-white">{t("addressLabel")}</span>
                    <div className="dark:text-white">{t("addressText")}</div>
                  </li>
                  <li>
                    <i className="bx bxs-phone-call"></i>
                    <span className="dark:text-white">{t("phoneLabel")}</span>
                    <a className="dark:text-white" href="tel:966-539006060">
                      966-539006060
                    </a>
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <span className="dark:text-white">{t("emailLabel")}</span>
                    <a
                      className="dark:text-white"
                      href="mailto:info@depthdefense.com"
                    >
                      info@depthdefense.com{" "}
                    </a>
                    <a href="#"></a>
                  </li>
                </ul>

                <div className="sidebar-follow-us">
                  <h3 className="dark:text-white">{t("followUsTitle")}</h3>

                  <ul className="social-wrap">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
