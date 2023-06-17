import React from 'react'





import "./Dashboard.css"
import DashNav from '../../components/DashNav'
import DashBio from '../../components/DashBio'
import DashMarkup from '../../components/DashMarkup'
import DashHeader from '../../components/DashHeader'





const Dashboard = () => {



  return (
    <div className='dashboard-container'>
      
      
      <DashNav />
       
     <DashBio />
     <div className='entries'>Entries</div>
      {/* <DashMarkup /> */}

     <DashHeader />
      
     
      
      

     
    </div>
  )
}

export default Dashboard
