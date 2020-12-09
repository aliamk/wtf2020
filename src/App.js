import React from 'react'
import Particles from 'react-particles-js';
import NavBar from './components/NavBar/NavBar'
import Charts from './components/Charts/Charts'
import SignIn from './components/SignIn/SignIn'
import './App.css'

const particleOptions = {
    particles: {
        number: {
            value: 20, density: { enable: true, value_area: 100 }, collisions: {
                enable: true
            },
        },
    }
}

function App() {
    return (
        <div>
            <Particles className='particles' params={particleOptions} />
            <SignIn />
            <NavBar />
            <Charts />
        </div>
    )
}

export default App
