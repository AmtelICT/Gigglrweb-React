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
            src="/external/rectangle23347517-rfzg-600w.png"
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
              <svg viewBox="0 0 602.2582857142856 1024" className="login-icon">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
              <span className="login-text06">Continue with Apple</span>
            </button>
          </div>
          <div className="login-frame590">
            <img
              alt="Rectangle13131349"
              src="/external/rectangle13131349-8zw-200h-200h.png"
              className="login-rectangle1313"
            />
            <span className="login-text07">
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
                <span className="login-text09">
                  <span>Email</span>
                </span>
                <span className="login-text11">
                  <span>Optional</span>
                </span>
              </div>
              <div className="login-frame469">
                <span className="login-text13">
                  <span>hi@email.com</span>
                </span>
              </div>
            </div>
            <div className="login-input1">
              <div className="login-frame5621">
                <span className="login-text15">
                  <span>Password</span>
                </span>
                <span className="login-text17">
                  <span>Optional</span>
                </span>
              </div>
              <div className="login-frame4691">
                <span className="login-text19">
                  <span>Password</span>
                </span>
              </div>
            </div>
            <button className="login-buttons">
              <button className="login-button-primary">
                <span className="login-text21">
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
