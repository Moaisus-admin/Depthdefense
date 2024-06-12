"use client";

import React from "react";
import Link from "next/link";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="user-area-style ptb-100 dark:bg-zinc-800">
        <div className="container ">
          <div className="contact-form-action dark:bg-zinc-700">
            <div className="account-title">
              <h2 className="dark:text-white">Log in</h2>
            </div>

            <form method="post">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label className="dark:text-white">Email or Phone</label>
                    <input className="form-control" type="text" name="name" />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label className="dark:text-white">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="login-action">
                    <span className="log-rem">
                      <input id="remember" type="checkbox" />
                      <label className="dark:text-white" htmlFor="remember">
                        Remember Me!
                      </label>
                    </span>

                    <span className="forgot-login">
                      <Link
                        className="dark:text-white"
                        href="/recover-password"
                      >
                        Forgot Your Password?
                      </Link>
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <button className="default-btn" type="submit">
                    <span>Log in now</span>
                  </button>
                </div>

                <div className="col-12">
                  <p className="dark:text-white">
                    Have an account?{" "}
                    <Link className="dark:text-white" href="/register">
                      Register Now!
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
