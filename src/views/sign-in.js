import React from 'react'

import { Helmet } from 'react-helmet'

import './sign-in.css'

const SignIn1 = (props) => {
  return (
    <div className="sign-in1-container">
      <Helmet>
        <title>Sign-in - Gigglr_web</title>
        <meta property="og:title" content="Sign-in - Gigglr_web" />
      </Helmet>
      <div className="sign-in1-container1">
        <button className="sign-in1-ghostbutton">
          <span className="sign-in1-text">
            <span>New account</span>
          </span>
          <img
            alt="login03I134"
            src="/external/login03i134-qyh7.svg"
            className="sign-in1-login03"
          />
        </button>
      </div>
      <div className="sign-in1-container2">
        <div className="sign-in1-container3">
          <img
            alt="bg1349"
            src="/external/bg1349-h7o-600w.png"
            className="sign-in1-bg"
          />
        </div>
        <div className="sign-in1-container4">
          <div className="sign-in1-gigglr0111">
            <img
              alt="Gigglr0111I134"
              src="/external/gigglr0111i134-4ssf-200w-200w.png"
              className="sign-in1-gigglr01111"
            />
          </div>
          <span className="sign-in1-text02">
            <span>Sign in</span>
          </span>
          <div className="sign-in1-openapp">
            <button className="sign-in1-button">
              <img
                alt="Loginlogo1349"
                src="/external/loginlogo1349-2zio.svg"
                className="sign-in1-loginlogo"
              />
              <span className="sign-in1-text04">
                <span>Continue with Google</span>
              </span>
            </button>
            <button className="sign-in1-button1">
              <div className="sign-in1-loginlogo1">
                <img
                  alt="apple1349"
                  src="/external/apple1349-u2u1.svg"
                  className="sign-in1-apple"
                />
              </div>
              <span className="sign-in1-text06">
                <span>Continue with Apple</span>
              </span>
            </button>
          </div>
          <div className="sign-in1-frame590">
            <img
              alt="Rectangle13131349"
              src="/external/rectangle13131349-8zw-200h-200h.png"
              className="sign-in1-rectangle1313"
            />
            <span className="sign-in1-text08">
              <span>Or</span>
            </span>
            <img
              alt="Rectangle13141349"
              src="/external/rectangle13141349-jlzd-200h-200h.png"
              className="sign-in1-rectangle1314"
            />
          </div>
          <div className="sign-in1-frame588">
            <div className="sign-in1-input">
              <div className="sign-in1-frame562">
                <span className="sign-in1-text10">
                  <span>Email</span>
                </span>
                <span className="sign-in1-text12">
                  <span>Optional</span>
                </span>
              </div>
              <div className="sign-in1-frame469">
                <span className="sign-in1-text14">
                  <span>hi@email.com</span>
                </span>
              </div>
            </div>
            <div className="sign-in1-input1">
              <div className="sign-in1-frame5621">
                <span className="sign-in1-text16">
                  <span>Password</span>
                </span>
                <span className="sign-in1-text18">
                  <span>Optional</span>
                </span>
              </div>
              <div className="sign-in1-frame4691">
                <span className="sign-in1-text20">
                  <span>Password</span>
                </span>
              </div>
            </div>
            <button className="sign-in1-buttons">
              <button className="sign-in1-button-primary">
                <span className="sign-in1-text22">
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

export default SignIn1
