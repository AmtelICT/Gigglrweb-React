import React from 'react'

import { Helmet } from 'react-helmet'

import './signup.css'

const Signup = (props) => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>Signup - Gigglr_web</title>
        <meta property="og:title" content="Signup - Gigglr_web" />
      </Helmet>
      <div className="signup-newaccount">
        <div className="signup-frame589">
          <img
            alt="bg1348"
            src="/external/bg1348-j69g-700w.png"
            className="signup-bg"
          />
          <div className="signup-container1">
            <div className="signup-pagination">
              <img
                alt="Ellipse281348"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/a528dfc2-9cd8-4762-accc-febdd686a0f7?org_if_sml=1123"
                className="signup-ellipse28"
              />
              <img
                alt="Ellipse291348"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/b2a4ab17-274f-4eb4-a79d-8a08c474ace1?org_if_sml=1279"
                className="signup-ellipse29"
              />
              <img
                alt="Ellipse301348"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/b2e84e81-3a09-4be8-b4b9-81566f9b99a9?org_if_sml=1123"
                className="signup-ellipse30"
              />
            </div>
            <span className="signup-text">
              <span>
                Interact with our AI-powered Chatbot for a personalized comedy
                experience. Get ready to giggle with gigglr!
              </span>
            </span>
          </div>
        </div>
        <div className="signup-frame587">
          <div className="signup-gigglr0111">
            <img
              alt="Gigglr0111I134"
              src="/external/gigglr0111i134-s3yh-200w.png"
              className="signup-gigglr01111"
            />
          </div>
          <div className="signup-frame1">
            <span className="signup-text02">
              <span>Welcome to gigglr</span>
            </span>
            <span className="signup-text04">
              <span>Where Laughter Lives</span>
            </span>
          </div>
          <div className="signup-openapp">
            <button className="signup-button">
              <img
                alt="Loginlogo1348"
                src="/external/loginlogo1348-6b47.svg"
                className="signup-loginlogo"
              />
              <span className="signup-text06">
                <span>Continue with Google</span>
              </span>
            </button>
            <button className="signup-button1">
              <div className="signup-loginlogo1">
                <img
                  alt="apple1348"
                  src="/external/apple1348-tgs.svg"
                  className="signup-apple"
                />
              </div>
              <span className="signup-text08">
                <span>Continue with Apple</span>
              </span>
            </button>
          </div>
          <div className="signup-frame590">
            <img
              alt="Rectangle13131348"
              src="/external/rectangle13131348-7ejn-200h.png"
              className="signup-rectangle1313"
            />
            <span className="signup-text10">
              <span>Or</span>
            </span>
            <img
              alt="Rectangle13141348"
              src="/external/rectangle13141348-0aeg-200h.png"
              className="signup-rectangle1314"
            />
          </div>
          <div className="signup-frame588">
            <div className="signup-input">
              <div className="signup-frame562">
                <span className="signup-text12">
                  <span>Choose username</span>
                </span>
                <span className="signup-text14">
                  <span>Optional</span>
                </span>
              </div>
              <div className="signup-frame469">
                <span className="signup-text16">
                  <span>e.g. GiggIruser</span>
                </span>
              </div>
            </div>
            <div className="signup-input1">
              <div className="signup-frame5621">
                <span className="signup-text18">
                  <span>Email</span>
                </span>
                <span className="signup-text20">
                  <span>Optional</span>
                </span>
              </div>
              <div className="signup-frame4691">
                <span className="signup-text22">
                  <span>hi@email.com</span>
                </span>
              </div>
            </div>
            <div className="signup-input2">
              <div className="signup-frame5622">
                <span className="signup-text24">
                  <span>Password</span>
                </span>
                <span className="signup-text26">
                  <span>Optional</span>
                </span>
              </div>
              <div className="signup-frame4692">
                <span className="signup-text28">
                  <span>Password</span>
                </span>
              </div>
              <span className="signup-text30">
                <span>At least 12 characters</span>
              </span>
            </div>
          </div>
          <button className="signup-buttons">
            <button className="signup-button-primary">
              <span className="signup-text32">
                <span>Join gigglr</span>
              </span>
            </button>
            <span className="signup-text34">
              <span className="signup-text35">
                By creating an account, you agree to our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Terms of Service</span>
              <span className="signup-text37">
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
        <div className="signup-frame586">
          <button className="signup-ghostbutton">
            <span className="signup-text39">
              <span>Sign in</span>
            </span>
            <img
              alt="login03I134"
              src="/external/login03i134-om.svg"
              className="signup-login03"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup
