import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <PageBanner
        pageTitle="My Account"
        homePageUrl="/"
        homePageText="Home"
        activePageText="My Account"
      />

      <div className="user-area-style ptb-100 dark:bg-zinc-800">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-action mb-50 dark:bg-zinc-700">
                <div className="account-title">
                  <h2 className="dark:text-white">Log in</h2>
                </div>

                <form method="post">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="dark:text-white">
                          Email or Phone
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                        />
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
                            Remember me!
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
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form-action dark:bg-zinc-700">
                <div className="account-title">
                  <h2 className="dark:text-white">Register</h2>
                </div>

                <form method="post">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="dark:text-white">Full Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label className="dark:text-white">Email Address</label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label className="dark:text-white">Password</label>
                        <input
                          className="form-control"
                          type="text"
                          name="password"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-6">
                          <button
                            className="default-btn register"
                            type="submit"
                          >
                            <span className="dark:text-white">
                              Register now
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
