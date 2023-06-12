import React from 'react'
import "./BMICalculator.css"
import DashNav from '../components/DashNav'
import DashBio from '../components/DashBio'
import DashHeader from '../components/DashHeader'

const BMICalculator = () => {
  return (
    <div className='bmi-container'>
    
<DashNav />
<DashBio />
<div className='bmi-content'>
  BMI Calculator
      </div>
      <DashHeader />
      
    </div>
  )
}

export default BMICalculator

