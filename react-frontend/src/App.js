import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Outlet } from 'react-router-dom'
import NavHeader from './NavHeader'
import MemeCard from './MemeCard'

function App() {
  return (
    <div className="App">
      <NavHeader />
      <MemeCard />
      {/* <Outlet /> */}
    </div>
  )
}

export default App
