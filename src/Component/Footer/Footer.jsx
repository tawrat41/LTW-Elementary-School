/* eslint-disable no-unused-vars */
import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <section className="contact-area" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="contact-content text-center">
              <a href="#">
                <img src="/media/logo.png" alt="logo" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum{" "}
              </p>
              <div className="hr"></div>
              <h6>House #24, Road #12, Sector #11, Uttara, Dhaka-1230</h6>
              <h6>
                +8801788932619<span>|</span>+8801941125442
              </h6>
              <div className="contact-social">
                <ul>
                  <li>
                    <a className="hover-target" href="https://www.facebook.com/people/Lead-The-Way-Elementary-School/100087888492081/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a className="hover-target" href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a className="hover-target" href="">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a className="hover-target" href="">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a className="hover-target" href="">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
