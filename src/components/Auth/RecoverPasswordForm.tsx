"use client";

import React from "react";
import Link from "next/link";

const RecoverPasswordForm: React.FC = () => {
  return (
    <>
      <div className="user-area-style recover-password-area ptb-100 dark:bg-zinc-800">
        <div className="container">
          <div className="contact-form-action recover dark:bg-zinc-700">
            <div className="form-heading text-center">
              <h3 className="form-title dark:text-white">Reset Password!</h3>

              <p className="reset-desc dark:text-white">
                Enter the email of your account to reset the password. Then you
                will receive a link to email to reset the password. If you have
                any issue about reset password{" "}
                <Link className="dark:text-white" href="/contact">
                  contact us.
                </Link>
              </p>
            </div>

            <form method="post">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <Link
                    href="/login"
                    className="now-log-in font-q dark:text-white"
                  >
                    Log In Your Account
                  </Link>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <p className="now-register dark:text-white">
                    Not a Member?{" "}
                    <Link href="/register" className="font-q">
                      Register
                    </Link>
                  </p>
                </div>

                <div className="col-12 text-center">
                  <button className="default-btn" type="submit">
                    <span>Reset Password</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecoverPasswordForm;
