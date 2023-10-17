import React from 'react'

import { Helmet } from 'react-helmet'

import './splash-screen.css'

const SplashScreen = (props) => {
  return (
    <div className="splash-screen-container">
      <Helmet>
        <title>SplashScreen - Gigglr_web</title>
        <meta property="og:title" content="SplashScreen - Gigglr_web" />
      </Helmet>
      <div className="splash-screen-container1">
        <button className="splash-screen-ghostbutton">
          <span className="splash-screen-text">
            <span>New account</span>
          </span>
          <img
            alt="login03I134"
            src="/external/login03i134-qyh7.svg"
            className="splash-screen-login03"
          />
        </button>
      </div>
      <div className="splash-screen-container2">
        <div className="splash-screen-container3">
          <img
            alt="bg1349"
            src="/external/rectangle23337517-xesc-600w.png"
            className="splash-screen-bg"
          />
        </div>
        <div className="splash-screen-container4">
          <div className="splash-screen-gigglr0111">
            <img
              alt="Gigglr01115181"
              src="/external/gigglr01115181-aghs-200w.png"
              className="splash-screen-gigglr01111"
            />
          </div>
          <div className="splash-screen-frame1">
            <span className="splash-screen-text02">
              <span>Welcome to gigglr</span>
            </span>
            <span className="splash-screen-text04">
              <span>Where Laughter Lives</span>
            </span>
          </div>
          <div className="splash-screen-frame600">
            <span className="splash-screen-text06">
              <span>Join our community and never have a dull moment!</span>
            </span>
          </div>
          <div className="splash-screen-frame593">
            <span className="splash-screen-text08">
              <span>Get Started</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
