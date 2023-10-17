import React from 'react'

import { Helmet } from 'react-helmet'

import './splash.css'

const Splash = (props) => {
  return (
    <div className="splash-container">
      <Helmet>
        <title>Gigglr_web</title>
        <meta property="og:title" content="Gigglr_web" />
      </Helmet>
      <div className="splash-container1">
        <button className="splash-ghostbutton">
          <span className="splash-text">
            <span>New account</span>
          </span>
          <img
            alt="login03I134"
            src="/external/login03i134-qyh7.svg"
            className="splash-login03"
          />
        </button>
      </div>
      <div className="splash-container2">
        <div className="splash-container3">
          <img
            alt="bg1349"
            src="/external/rectangle23337517-xesc-600w.png"
            className="splash-bg"
          />
        </div>
        <div className="splash-container4">
          <div className="splash-gigglr0111">
            <img
              alt="Gigglr01115181"
              src="/external/gigglr01115181-aghs-200w.png"
              className="splash-gigglr01111"
            />
          </div>
          <div className="splash-frame1">
            <span className="splash-text02">
              <span>Welcome to gigglr</span>
            </span>
            <span className="splash-text04">
              <span>Where Laughter Lives</span>
            </span>
          </div>
          <div className="splash-frame600">
            <span className="splash-text06">
              <span>Join our community and never have a dull moment!</span>
            </span>
          </div>
          <div className="splash-frame593">
            <span className="splash-text08">
              <span>Get Started</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Splash
