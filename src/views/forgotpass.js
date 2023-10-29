import React from 'react'

import { Helmet } from 'react-helmet'

import './forgotpass.css'

const Forgotpass = (props) => {
  return (
    <div className="forgotpass-container">
      <Helmet>
        <title>forgotpass - Gigglr_web</title>
        <meta property="og:title" content="forgotpass - Gigglr_web" />
      </Helmet>
      <div className="forgotpass-forgot-password">
        <div className="forgotpass-frame586">
          <button className="forgotpass-ghostbutton">
            <span className="forgotpass-text">
              <span>Sign in</span>
            </span>
            <img
              alt="login03I134"
              src="/external/login03i134-qyh7.svg"
              className="forgotpass-login03"
            />
          </button>
        </div>
        <div className="forgotpass-frame587">
          <div className="forgotpass-frame1">
            <span className="forgotpass-text02">
              <span>Forgot Password</span>
            </span>
            <span className="forgotpass-text04">
              <span>
                Enter the username or email address associated with your gigglr
                account. We&apos;ll send you an email with instructions to reset
                your password.
              </span>
            </span>
          </div>
          <div className="forgotpass-frame588">
            <div className="forgotpass-input">
              <div className="forgotpass-frame562">
                <span className="forgotpass-text06">
                  <span>Email</span>
                </span>
                <span className="forgotpass-text08">
                  <span>Optional</span>
                </span>
              </div>
              <div className="forgotpass-frame469">
                <span className="forgotpass-text10">
                  <span>hi@email.com</span>
                </span>
              </div>
            </div>
          </div>
          <button className="forgotpass-buttons">
            <button className="forgotpass-button-primary">
              <span className="forgotpass-text12">
                <span>Send Reset Link</span>
              </span>
            </button>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Forgotpass
