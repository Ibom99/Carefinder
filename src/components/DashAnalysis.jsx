import React from 'react'
import DashNav from './DashNav'
import DashHeader from './DashHeader'
import { Helmet } from 'react-helmet-async'
import { ROUTES } from '../utils/constants'
import "./DashAnalysis.css"

const DashAnalysis = () => {
  return (
    <div className='analysis-container'>
        <Helmet>
        <title>Carefinder Review analysis Page</title>
        <meta name='description' content='Welcome to Carefinder review analysis page' />
        <link rel='canonical' href={ROUTES.ANALYSIS} />
      </Helmet>
        <div>
            <DashNav/>
        </div>
      <div className='analysis content'>
<h1>Review Analysis Page</h1>
      </div>
      <div className='analysis-header'>
<DashHeader />
        </div>
    </div>
  )
}

export default DashAnalysis
