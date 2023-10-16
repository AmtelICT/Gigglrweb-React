import React from 'react'

import { Helmet } from 'react-helmet'

import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>SignIn - Gigglr_web</title>
        <meta property="og:title" content="SignIn - Gigglr_web" />
      </Helmet>
      <div className="sign-in-signin">
        <div className="sign-in-frame589">
          <img
            alt="bg1349"
            src="/external/bg1349-h7o-200w.png"
            className="sign-in-bg"
          />
          <div className="sign-in-pagination">
            <img
              alt="Ellipse281349"
              src="/external/ellipse281349-pdqv-200h.png"
              className="sign-in-ellipse28"
            />
            <img
              alt="Ellipse291349"
              src="/external/ellipse291349-6z0a-200h.png"
              className="sign-in-ellipse29"
            />
            <img
              alt="Ellipse301349"
              src="/external/ellipse301349-lu1-200h.png"
              className="sign-in-ellipse30"
            />
          </div>
          <span className="sign-in-text">
            <span>
              Connect with comedy lovers from around the world. Your next laugh
              is just a click away!
            </span>
          </span>
        </div>
        <div className="sign-in-frame587">
          <div className="sign-in-gigglr0111">
            <img
              alt="Gigglr0111I134"
              src="/external/gigglr0111i134-4ssf-200w.png"
              className="sign-in-gigglr01111"
            />
          </div>
          <span className="sign-in-text02">
            <span>Sign in</span>
          </span>
          <div className="sign-in-openapp">
            <button className="sign-in-button">
              <img
                alt="Loginlogo1349"
                src="/external/Loginlogo1349-2zio1.svg"
                className="sign-in-loginlogo"
              />
              <span className="sign-in-text04">
                <span>Continue with Google</span>
              </span>
            </button>
            <button className="sign-in-button1">
              <div className="sign-in-loginlogo1">
                <img
                  alt="apple1349"
                  src="/external/apple1349-u2u.svg"
                  className="sign-in-apple"
                />
              </div>
              <span className="sign-in-text06">
                <span>Continue with Apple</span>
              </span>
            </button>
          </div>
          <div className="sign-in-frame590">
            <img
              alt="Rectangle13131349"
              src="/external/rectangle13131349-8zw-200h.png"
              className="sign-in-rectangle1313"
            />
            <span className="sign-in-text08">
              <span>Or</span>
            </span>
            <img
              alt="Rectangle13141349"
              src="/external/rectangle13141349-jlzd-200h.png"
              className="sign-in-rectangle1314"
            />
          </div>
          <div className="sign-in-frame588">
            <div className="sign-in-input">
              <div className="sign-in-frame562">
                <span className="sign-in-text10">
                  <span>Email</span>
                </span>
                <span className="sign-in-text12">
                  <span>Optional</span>
                </span>
              </div>
              <div className="sign-in-frame469">
                <span className="sign-in-text14">
                  <span>hi@email.com</span>
                </span>
              </div>
            </div>
            <div className="sign-in-input1">
              <div className="sign-in-frame5621">
                <span className="sign-in-text16">
                  <span>Password</span>
                </span>
                <span className="sign-in-text18">
                  <span>Optional</span>
                </span>
              </div>
              <div className="sign-in-frame4691">
                <span className="sign-in-text20">
                  <span>Password</span>
                </span>
              </div>
            </div>
          </div>
          <button className="sign-in-buttons">
            <button className="sign-in-button-primary">
              <span className="sign-in-text22">
                <span>Sign in</span>
              </span>
            </button>
          </button>
        </div>
        <div className="sign-in-frame586">
          <button className="sign-in-ghostbutton">
            <span className="sign-in-text24">
              <span>New account</span>
            </span>
            <img
              alt="login03I134"
              src="/external/login03i134-qyh7.svg"
              className="sign-in-login03"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
