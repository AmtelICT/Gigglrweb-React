import React from 'react'

import { Helmet } from 'react-helmet'

import './done1.css'

const Done1 = (props) => {
  return (
    <div className="done1-container">
      <Helmet>
        <title>Done1 - Gigglr_web</title>
        <meta property="og:title" content="Done1 - Gigglr_web" />
      </Helmet>
      <div className="done1-container1">
        <div className="done1-container2">
          <div className="done1-left">
            <div className="done1-hometab">
              <div className="done1-logohorizontal">
                <img
                  alt="Gigglr0112I134"
                  src="/external/gigglr0112i134-7pk-200h.png"
                  className="done1-gigglr0112"
                />
                <span className="done1-text">
                  <span>gigglr</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="done1-container3">
          <div className="done1-rightinfo">
            <div className="done1-profile">
              <div className="done1-name">
                <div className="done1-avatarnav">
                  <div className="done1-avatar">
                    <img
                      alt="IMAGE151I134"
                      src="/external/image151i134-ery-200h.png"
                      className="done1-image151"
                    />
                  </div>
                </div>
                <span className="done1-text02">
                  <span>John Smith</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="done1-container4">
        <div className="done1-steppermodal">
          <div className="done1-inputs">
            <div className="done1-description">
              <span className="done1-text04">
                <span>👍🏻</span>
              </span>
              <span className="done1-text06">
                <span>You&apos;re All Set!</span>
              </span>
              <span className="done1-text08">
                <span>
                  Your profile is now personalized and you&apos;re all set to
                  explore gigglr. Get ready to enjoy a world of comedy tailored
                  just for you!
                </span>
              </span>
            </div>
          </div>
          <div className="done1-ctasection">
            <button className="done1-button-primary">
              <span className="done1-text10">
                <span>Start Exploring</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Done1
