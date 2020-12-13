import React from 'react'
import { Route, Switch } from 'react-router-dom'

// import logo from './logo.svg'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar/Navbar'


import './App.css'

function App () {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms' exact component={Rooms} />
        <Route path='/rooms/:slug' exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  )
}

export default App
