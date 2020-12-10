import React from 'react'
import Particles from 'react-particles-js';
import NavBar from './components/NavBar/NavBar'
import Charts from './components/Charts/Charts'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
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

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            route: 'signin',
            isSignedIn: 'false'
        }
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({ isSignedIn: false })
        } else if (route === 'home') {
            this.setState({ isSignedIn: true })
        }
        this.setState({ route: route })
    }

    render() {
        return (
            <div>
                <Particles className='particles' params={particleOptions} />
                <NavBar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                { this.state.route === 'home' ? <Charts />
                    : (this.state.route === 'signin' ? <SignIn onRouteChange={this.onRouteChange} />
                        : <Register onRouteChange={this.onRouteChange} />
                    )
                }
            </div >
        )
    }
}

export default App
