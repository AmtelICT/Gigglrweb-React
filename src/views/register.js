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
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="register-icon"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
              <span className="register-text08">Continue with Facebook</span>
            </button>
          </div>
          <div className="register-frame590">
            <img
              alt="Rectangle13131348"
              src="/external/rectangle13131348-7ejn-200h.png"
              className="register-rectangle1313"
            />
            <span className="register-text09">
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
                <span className="register-text11">
                  <span>Choose username</span>
                </span>
                <span className="register-text13">
                  <span>Optional</span>
                </span>
              </div>
              <div className="register-frame469">
                <span className="register-text15">
                  <span>e.g. GiggIruser</span>
                </span>
              </div>
            </div>
            <div className="register-input1">
              <div className="register-frame5621">
                <span className="register-text17">
                  <span>Email</span>
                </span>
                <span className="register-text19">
                  <span>Optional</span>
                </span>
              </div>
              <div className="register-frame4691">
                <span className="register-text21">
                  <span>hi@email.com</span>
                </span>
              </div>
            </div>
            <div className="register-input2">
              <div className="register-frame5622">
                <span className="register-text23">
                  <span>Password</span>
                </span>
                <span className="register-text25">
                  <span>Optional</span>
                </span>
              </div>
              <div className="register-frame4692">
                <span className="register-text27">
                  <span>Password</span>
                </span>
              </div>
              <span className="register-text29">
                <span>At least 12 characters</span>
              </span>
            </div>
          </div>
          <button className="register-buttons">
            <button className="register-button-primary">
              <span className="register-text31">
                <span>Join gigglr</span>
              </span>
            </button>
            <span className="register-text33">
              <span className="register-text34">
                By creating an account, you agree to our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Terms of Service</span>
              <span className="register-text36">
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
