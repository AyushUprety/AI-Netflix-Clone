import React  from 'react';
import { CssBaseline } from '@mui/material'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
    <CssBaseline/>
    <Routes>
      <Route exact path='/' element={<Movies/>}/>
      <Route exact path='/movies/:movieid' element={<MovieInformation/>}/>
      <Route exact path='/actors/:actorid' element={<Actors/>}/>
      <Route exact path='/profile/:userid' element={<Profile/>}/>
    </Routes>
      
    </div>
  )
}

export default App
