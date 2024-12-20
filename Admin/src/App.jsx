import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProjectUpdate from './Pages/ProjectUpdate'
import AddProjects from './Pages/AddProjects'
import AddExp from './Pages/AddExp'
import ExpUpdate from './Pages/ExpUpdate'

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/update/:id' element={<ProjectUpdate/>}/>
          <Route path='/exp/add' element={<AddExp/>}/>
          <Route path='/updateExp/:id' element={<ExpUpdate/>}/>
          <Route path='/addProjects' element={<AddProjects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App