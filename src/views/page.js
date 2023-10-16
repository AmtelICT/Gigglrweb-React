import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Gigglr_web</title>
        <meta property="og:title" content="Page - Gigglr_web" />
      </Helmet>
      <div className="page-container1">
        <button className="page-ghostbutton">
          <span className="page-text">
            <span>New account</span>
          </span>
          <img
            alt="login03I134"
            src="/external/login03i134-qyh7.svg"
            className="page-login03"
          />
        </button>
      </div>
      <div className="page-container2">
        <div className="page-container3">
          <img
            alt="bg1349"
            src="/external/bg1349-h7o-600w.png"
            className="page-bg"
          />
        </div>
        <div className="page-container4">
          <div className="page-gigglr0111">
            <img
              alt="Gigglr0111I134"
              src="/external/gigglr0111i134-4ssf-200w-200w.png"
              className="page-gigglr01111"
            />
          </div>
          <span className="page-text02">
            <span>Sign in</span>
          </span>
          <div className="page-openapp">
            <button className="page-button">
              <img
                alt="Loginlogo1349"
                src="/external/loginlogo1349-2zio.svg"
                className="page-loginlogo"
              />
              <span className="page-text04">
                <span>Continue with Google</span>
              </span>
            </button>
            <button className="page-button1">
              <div className="page-loginlogo1">
                <img
                  alt="apple1349"
                  src="/external/apple1349-u2u1.svg"
                  className="page-apple"
                />
              </div>
              <span className="page-text06">
                <span>Continue with Apple</span>
              </span>
            </button>
          </div>
          <div className="page-frame590">
            <img
              alt="Rectangle13131349"
              src="/external/rectangle13131349-8zw-200h-200h.png"
              className="page-rectangle1313"
            />
            <span className="page-text08">
              <span>Or</span>
            </span>
            <img
              alt="Rectangle13141349"
              src="/external/rectangle13141349-jlzd-200h-200h.png"
              className="page-rectangle1314"
            />
          </div>
          <div className="page-frame588">
            <div className="page-input">
              <div className="page-frame562">
                <span className="page-text10">
                  <span>Email</span>
                </span>
                <span className="page-text12">
                  <span>Optional</span>
                </span>
              </div>
              <div className="page-frame469">
                <span className="page-text14">
                  <span>hi@email.com</span>
                </span>
              </div>
            </div>
            <div className="page-input1">
              <div className="page-frame5621">
                <span className="page-text16">
                  <span>Password</span>
                </span>
                <span className="page-text18">
                  <span>Optional</span>
                </span>
              </div>
              <div className="page-frame4691">
                <span className="page-text20">
                  <span>Password</span>
                </span>
              </div>
            </div>
            <button className="page-buttons">
              <button className="page-button-primary">
                <span className="page-text22">
                  <span>Sign in</span>
                </span>
              </button>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
