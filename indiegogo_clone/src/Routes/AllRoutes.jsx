import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import OurTop10Finds from '../Pages/OurTop10Finds';
import Signup from '../Pages/Signup';
import StartACampaign from '../Pages/StartACampaign';
import TeamFavorites from '../Pages/TeamFavorites';
import WhatWeDo from '../Pages/WhatWeDo';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/ourtop10finds' element={<OurTop10Finds/>}></Route>
        <Route path='/teamfavorites' element={<TeamFavorites/>}></Route>
        <Route path='/startacampaign' element={<StartACampaign/>}></Route>
        <Route path='/whatwedo' element={<WhatWeDo/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>
    </div>
  )
}

export default AllRoutes