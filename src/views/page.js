import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Gigglr_web</title>
        <meta property="og:title" content="Page - Gigglr_web" />
      </Helmet>
    </div>
  )
}

export default Page
