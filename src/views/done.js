import React from 'react'

import { Helmet } from 'react-helmet'

import './done.css'

const Done = (props) => {
  return (
    <div className="done-container">
      <Helmet>
        <title>Done - Gigglr_web</title>
        <meta property="og:title" content="Done - Gigglr_web" />
      </Helmet>
      <div className="done-youre-all-set">
        <div className="done-frame587">
          <div className="done-steppermodal">
            <div className="done-inputs">
              <div className="done-description">
                <span className="done-text">
                  <span>👍🏻</span>
                </span>
                <span className="done-text02">
                  <span>You&apos;re All Set!</span>
                </span>
                <span className="done-text04">
                  <span>
                    Your profile is now personalized and you&apos;re all set to
                    explore gigglr. Get ready to enjoy a world of comedy
                    tailored just for you!
                  </span>
                </span>
              </div>
            </div>
            <div className="done-ctasection">
              <button className="done-button-primary">
                <span className="done-text06">
                  <span>Start Exploring</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="done-topbar">
          <div className="done-left">
            <div className="done-hometab">
              <div className="done-logohorizontal">
                <img
                  alt="Gigglr0112I134"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/b81d6513-736a-48e3-97e5-8c11a950a2eb?org_if_sml=1750"
                  className="done-gigglr0112"
                />
                <span className="done-text08">
                  <span>gigglr</span>
                </span>
              </div>
            </div>
          </div>
          <div className="done-rightinfo">
            <div className="done-profile">
              <div className="done-name">
                <div className="done-avatarnav">
                  <div className="done-avatar">
                    <img
                      alt="IMAGE151I134"
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/d822e4c7-89ab-4e45-89f6-00742bab8263?org_if_sml=12380"
                      className="done-image151"
                    />
                  </div>
                </div>
                <span className="done-text10">
                  <span>John Smith</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Done
