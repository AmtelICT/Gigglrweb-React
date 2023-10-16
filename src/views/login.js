import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>login - Gigglr_web</title>
        <meta property="og:title" content="login - Gigglr_web" />
      </Helmet>
      <div className="login-container1">
        <button className="login-ghostbutton">
          <span className="login-text">
            <span>New account</span>
          </span>
          <img
            alt="login03I134"
            src="/external/login03i134-qyh7.svg"
            className="login-login03"
          />
        </button>
      </div>
      <div className="login-container2">
        <div className="login-container3">
          <img
            alt="bg1349"
            src="/external/bg1349-h7o-600w.png"
            className="login-bg"
          />
        </div>
        <div className="login-container4">
          <div className="login-gigglr0111">
            <img
              alt="Gigglr0111I134"
              src="/external/gigglr0111i134-4ssf-200w-200w.png"
              className="login-gigglr01111"
            />
          </div>
          <span className="login-text02">
            <span>Sign in</span>
          </span>
          <div className="login-openapp">
            <button className="login-button">
              <img
                alt="Loginlogo1349"
                src="/external/loginlogo1349-2zio.svg"
                className="login-loginlogo"
              />
              <span className="login-text04">
                <span>Continue with Google</span>
              </span>
            </button>
            <button className="login-button1">
              <div className="login-loginlogo1">
                <img
                  alt="apple1349"
                  src="/external/apple1349-u2u1.svg"
                  className="login-apple"
                />
              </div>
              <span className="login-text06">
                <span>Continue with Apple</span>
              </span>
            </button>
          </div>
          <div className="login-frame590">
            <img
              alt="Rectangle13131349"
              src="/external/rectangle13131349-8zw-200h-200h.png"
              className="login-rectangle1313"
            />
            <span className="login-text08">
              <span>Or</span>
            </span>
            <img
              alt="Rectangle13141349"
              src="/external/rectangle13141349-jlzd-200h-200h.png"
              className="login-rectangle1314"
            />
          </div>
          <div className="login-frame588">
            <div className="login-input">
              <div className="login-frame562">
                <span className="login-text10">
                  <span>Email</span>
                </span>
                <span className="login-text12">
                  <span>Optional</span>
                </span>
              </div>
              <div className="login-frame469">
                <span className="login-text14">
                  <span>hi@email.com</span>
                </span>
              </div>
            </div>
            <div className="login-input1">
              <div className="login-frame5621">
                <span className="login-text16">
                  <span>Password</span>
                </span>
                <span className="login-text18">
                  <span>Optional</span>
                </span>
              </div>
              <div className="login-frame4691">
                <span className="login-text20">
                  <span>Password</span>
                </span>
              </div>
            </div>
            <button className="login-buttons">
              <button className="login-button-primary">
                <span className="login-text22">
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

export default Login
