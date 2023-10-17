import React from 'react'

import { Helmet } from 'react-helmet'

import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - Gigglr_web</title>
        <meta property="og:title" content="Register - Gigglr_web" />
      </Helmet>
      <div className="register-container1">
        <button className="register-ghostbutton">
          <span className="register-text">
            <span>New account</span>
          </span>
          <img
            alt="login03I134"
            src="/external/login03i134-qyh7.svg"
            className="register-login03"
          />
        </button>
      </div>
      <div className="register-container2">
        <div className="register-container3">
          <img
            alt="bg1349"
            src="/external/rectangle23357517-d7r-600w.png"
            className="register-bg"
          />
        </div>
        <div className="register-container4">
          <div className="register-gigglr0111">
            <img
              alt="Gigglr0111I134"
              src="/external/gigglr0111i134-s3yh-200w.png"
              className="register-gigglr01111"
            />
          </div>
          <div className="register-frame1">
            <span className="register-text02">
              <span>Welcome to gigglr</span>
            </span>
            <span className="register-text04">
              <span>Where Laughter Lives</span>
            </span>
          </div>
          <div className="register-openapp">
            <button className="register-button">
              <img
                alt="Loginlogo1348"
                src="/external/loginlogo1348-6b47.svg"
                className="register-loginlogo"
              />
              <span className="register-text06">
                <span>Continue with Google</span>
              </span>
            </button>
            <button className="register-button1">
              <div className="register-loginlogo1">
                <img
                  alt="apple1348"
                  src="/external/apple1348-tgs.svg"
                  className="register-apple"
                />
              </div>
              <span className="register-text08">
                <span>Continue with Apple</span>
              </span>
            </button>
          </div>
          <div className="register-frame590">
            <img
              alt="Rectangle13131348"
              src="/external/rectangle13131348-7ejn-200h.png"
              className="register-rectangle1313"
            />
            <span className="register-text10">
              <span>Or</span>
            </span>
            <img
              alt="Rectangle13141348"
              src="/external/rectangle13141348-0aeg-200h.png"
              className="register-rectangle1314"
            />
          </div>
          <div className="register-frame588">
            <div className="register-input">
              <div className="register-frame562">
                <span className="register-text12">
                  <span>Choose username</span>
                </span>
                <span className="register-text14">
                  <span>Optional</span>
                </span>
              </div>
              <div className="register-frame469">
                <span className="register-text16">
                  <span>e.g. GiggIruser</span>
                </span>
              </div>
            </div>
            <div className="register-input1">
              <div className="register-frame5621">
                <span className="register-text18">
                  <span>Email</span>
                </span>
                <span className="register-text20">
                  <span>Optional</span>
                </span>
              </div>
              <div className="register-frame4691">
                <span className="register-text22">
                  <span>hi@email.com</span>
                </span>
              </div>
            </div>
            <div className="register-input2">
              <div className="register-frame5622">
                <span className="register-text24">
                  <span>Password</span>
                </span>
                <span className="register-text26">
                  <span>Optional</span>
                </span>
              </div>
              <div className="register-frame4692">
                <span className="register-text28">
                  <span>Password</span>
                </span>
              </div>
              <span className="register-text30">
                <span>At least 12 characters</span>
              </span>
            </div>
          </div>
          <button className="register-buttons">
            <button className="register-button-primary">
              <span className="register-text32">
                <span>Join gigglr</span>
              </span>
            </button>
            <span className="register-text34">
              <span className="register-text35">
                By creating an account, you agree to our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Terms of Service</span>
              <span className="register-text37">
                {' '}
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Privacy &amp; Cookie Statement.</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
