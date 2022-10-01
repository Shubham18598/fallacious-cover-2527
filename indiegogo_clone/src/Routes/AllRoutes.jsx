import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import EachCard from '../Components/EachCard';
import PrivateRoute from '../Components/PrivateRoute';
import Homepage from '../Pages/Homepage';
import Login from '../Pages/Login';
import OurTop10Finds from '../Pages/OurTop10Finds';
import Signup from '../Pages/Signup';
import StartACampaign from '../Pages/StartACampaign';
import TeamFavorites from '../Pages/TeamFavorites';
import { TechInovation } from '../Pages/TechInovation/TechInovation';
import WhatWeDo from '../Pages/WhatWeDo';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/ourtop10finds' element={<PrivateRoute><OurTop10Finds/></PrivateRoute>}></Route>
        <Route path='/teamfavorites' element={<PrivateRoute><TeamFavorites/></PrivateRoute>}></Route>
        <Route path='/startacampaign' element={<PrivateRoute><StartACampaign/> </PrivateRoute>}></Route>
        <Route path='/whatwedo' element={<PrivateRoute><WhatWeDo/></PrivateRoute>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/tech&inovation' element={<TechInovation/>}></Route>

        <Route path='/campagin'></Route>
        <Route path='/campaign/:id' element={<EachCard/>}></Route>

      </Routes>
    </div>
  )
}

export default AllRoutes