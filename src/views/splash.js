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
        <div className="splash-frame605">
          <button className="splash-ghostbutton">
            <span className="splash-text">
              <span>New account</span>
            </span>
            <img
              alt="login033879"
              src="/external/login033879-cmjh.svg"
              className="splash-login03"
            />
          </button>
        </div>
      </div>
      <div className="splash-container2">
        <div className="splash-frame602">
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
      <div className="splash-container3">
        <div className="splash-frame599">
          <div className="splash-frame597">
            <img
              alt="Rectangle45181"
              src="/external/rectangle45181-i4i2l-700w.png"
              className="splash-rectangle4"
            />
          </div>
          <div className="splash-frame598">
            <span className="splash-text10">
              <span>
                Choose your flavor of comedy. From dad jokes to puns, we&apos;ve
                got it all!
              </span>
            </span>
          </div>
          <div className="splash-pagination">
            <img
              alt="Ellipse285181"
              src="/external/ellipse285181-ocri-200h.png"
              className="splash-ellipse28"
            />
            <img
              alt="Ellipse295181"
              src="/external/ellipse295181-wgv8-200h.png"
              className="splash-ellipse29"
            />
            <img
              alt="Ellipse305181"
              src="/external/ellipse305181-qjgqi-200h.png"
              className="splash-ellipse30"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Splash
