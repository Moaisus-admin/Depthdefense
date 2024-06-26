"use client";

import React from "react";

const OurChallenges: React.FC = () => {
  return (
    <>
      <div className="challenges-area pt-100 jarallax dark:bg-slate-900">
        <div className="container">
          <div className="section-title white-title ">
            <div className="text-red-600 text-2xl">Our Challenges</div>
            <h2 className="text-white">
              You Can Protect Your Organization’s Cybersecurity By Us
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 dark:bg-slate-900">
              <div className="single-challenges overly-one dark:bg-slate-900 dark:text-white">
                <div className="overly-two">
                  <i className="flaticon-threat"></i>
                  <h3 className="dark:text-white">Identifying Threats</h3>

                  <span className="flaticon-threat"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 dark:bg-slate-900">
              <div className="single-challenges overly-one dark:bg-slate-900 dark:text-white">
                <div className="overly-two">
                  <i className="flaticon-cyber"></i>
                  <h3 className="dark:text-white">Cyber Risk Assessment</h3>

                  <span className="flaticon-cyber"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 dark:bg-slate-900">
              <div className="single-challenges overly-one  dark:bg-slate-900 dark:text-white">
                <div className="overly-two">
                  <i className="flaticon-cyber-security-1"></i>
                  <h3 className="dark:text-white">Testing Cybersecurity</h3>

                  <span className="flaticon-cyber-security-1"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 dark:bg-slate-900">
              <div className="single-challenges overly-one  dark:bg-slate-900 dark:text-white">
                <div className="overly-two">
                  <i className="flaticon-password"></i>
                  <h3 className="dark:text-white">Managing Cloud Security</h3>

                  <span className="flaticon-password"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurChallenges;
