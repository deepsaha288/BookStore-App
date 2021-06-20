import React from 'react'
import DisplayBook from '../../Components/DisplayBook/DisplayBook'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function Dashboard() {
  return (
    <div className="container">
        <Header/>
       <DisplayBook/>
      <Footer/>
    </div>
  )
}

export default Dashboard;