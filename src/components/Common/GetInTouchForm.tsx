"use client";

import React from "react";

const GetInTouchForm: React.FC = () => {
  return (
    <>
      <div className="get-in-touch-area ptb-100">
        <div className="container">
          <div className="section-title white-title">
            <span>Get In Touch</span>
            <h2>
              Contact Us Today To Speak With An Expert About Your Specific Needs
            </h2>
          </div>

          <form id="contactForm" className="get-in-touch-form">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label className="dark:text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="number"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="text"
                    cols={30}
                    rows={5}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-sm-12">
                <button type="submit" className="default-btn">
                  Consultation
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetInTouchForm;
