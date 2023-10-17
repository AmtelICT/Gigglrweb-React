import React from 'react'

import { Helmet } from 'react-helmet'

import './allset.css'

const Allset = (props) => {
  return (
    <div className="allset-container">
      <Helmet>
        <title>Allset - Gigglr_web</title>
        <meta property="og:title" content="Allset - Gigglr_web" />
      </Helmet>
      <div className="allset-container1">
        <div className="allset-container2">
          <div className="allset-left">
            <div className="allset-hometab">
              <div className="allset-logohorizontal">
                <img
                  alt="Gigglr0112I134"
                  src="/external/gigglr0112i134-7pk-200h.png"
                  className="allset-gigglr0112"
                />
                <span className="allset-text">
                  <span>gigglr</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="allset-container3">
          <div className="allset-rightinfo">
            <div className="allset-profile">
              <div className="allset-name">
                <div className="allset-avatarnav">
                  <div className="allset-avatar">
                    <img
                      alt="IMAGE151I134"
                      src="/external/image151i134-ery-200h.png"
                      className="allset-image151"
                    />
                  </div>
                </div>
                <span className="allset-text02">
                  <span>John Smith</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="allset-container4">
        <div className="allset-steppermodal">
          <div className="allset-inputs">
            <div className="allset-description">
              <span className="allset-text04">
                <span>👍🏻</span>
              </span>
              <span className="allset-text06">
                <span>You&apos;re All Set!</span>
              </span>
              <span className="allset-text08">
                <span>
                  Your profile is now personalized and you&apos;re all set to
                  explore gigglr. Get ready to enjoy a world of comedy tailored
                  just for you!
                </span>
              </span>
            </div>
          </div>
          <div className="allset-ctasection">
            <button className="allset-button-primary">
              <span className="allset-text10">
                <span>Start Exploring</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allset
