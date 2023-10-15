import React from 'react'

import { Helmet } from 'react-helmet'

import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>SignIn - Gigglr_web</title>
        <meta property="og:title" content="SignIn - Gigglr_web" />
      </Helmet>
      <div className="sign-in-signin">
        <div className="sign-in-frame589">
          <img
            alt="bg1349"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/b689b6e6-66ea-4087-92e4-4c570462d5c9?org_if_sml=11236894"
            className="sign-in-bg"
          />
          <span className="sign-in-text">
            <span>
              Connect with comedy lovers from around the world. Your next laugh
              is just a click away!
            </span>
          </span>
          <div className="sign-in-pagination">
            <img
              alt="Ellipse281349"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/340a8ebc-2719-4468-a6f9-7fd255b760b9?org_if_sml=1123"
              className="sign-in-ellipse28"
            />
            <img
              alt="Ellipse291349"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/2f7f7eb8-4f44-46f0-91a3-b9f7e6dae426?org_if_sml=1279"
              className="sign-in-ellipse29"
            />
            <img
              alt="Ellipse301349"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/b8a7f870-6f62-48ea-a4eb-f1556371dead?org_if_sml=1123"
              className="sign-in-ellipse30"
            />
          </div>
        </div>
        <div className="sign-in-frame587">
          <div className="sign-in-gigglr0111">
            <img
              alt="Gigglr0111I134"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/5bc01685-d767-420f-8cc1-6f7bd81ee066?org_if_sml=13432"
              className="sign-in-gigglr01111"
            />
          </div>
          <span className="sign-in-text02">
            <span>Sign in</span>
          </span>
          <div className="sign-in-openapp">
            <button className="sign-in-button">
              <img
                alt="Loginlogo1349"
                src="/external/loginlogo1349-2zio.svg"
                className="sign-in-loginlogo"
              />
              <span className="sign-in-text04">
                <span>Continue with Google</span>
              </span>
            </button>
            <button className="sign-in-button1">
              <div className="sign-in-loginlogo1">
                <img
                  alt="apple1349"
                  src="/external/apple1349-u2u.svg"
                  className="sign-in-apple"
                />
              </div>
              <span className="sign-in-text06">
                <span>Continue with Apple</span>
              </span>
            </button>
          </div>
          <div className="sign-in-frame590">
            <img
              alt="Rectangle13131349"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/9cda6bd3-b6f8-4c59-aa02-ee2bb7efcc53?org_if_sml=1150"
              className="sign-in-rectangle1313"
            />
            <span className="sign-in-text08">
              <span>Or</span>
            </span>
            <img
              alt="Rectangle13141349"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/837a8117-b939-43e1-b67d-6e430b85c006/504284f4-f06d-4e61-b0ee-975d210d4f82?org_if_sml=1150"
              className="sign-in-rectangle1314"
            />
          </div>
          <div className="sign-in-frame588">
            <div className="sign-in-input">
              <div className="sign-in-frame562">
                <span className="sign-in-text10">
                  <span>Email</span>
                </span>
                <span className="sign-in-text12">
                  <span>Optional</span>
                </span>
              </div>
              <div className="sign-in-frame469">
                <span className="sign-in-text14">
                  <span>hi@email.com</span>
                </span>
              </div>
            </div>
            <div className="sign-in-input1">
              <div className="sign-in-frame5621">
                <span className="sign-in-text16">
                  <span>Password</span>
                </span>
                <span className="sign-in-text18">
                  <span>Optional</span>
                </span>
              </div>
              <div className="sign-in-frame4691">
                <span className="sign-in-text20">
                  <span>Password</span>
                </span>
              </div>
            </div>
          </div>
          <button className="sign-in-buttons">
            <button className="sign-in-button-primary">
              <span className="sign-in-text22">
                <span>Sign in</span>
              </span>
            </button>
          </button>
        </div>
        <div className="sign-in-frame586">
          <button className="sign-in-ghostbutton">
            <span className="sign-in-text24">
              <span>New account</span>
            </span>
            <img
              alt="login03I134"
              src="/external/login03i134-qyh7.svg"
              className="sign-in-login03"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
