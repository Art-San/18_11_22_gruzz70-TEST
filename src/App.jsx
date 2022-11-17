import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/plans" component={Plans} />
                <Route path="/trainers" component={Trainers} />
                <Route path="/404" component={NotFound} />
                <Route path="/" end component={Home} />
                <Redirect to="/404" />
            </Switch>
            <Footer />
        </div>
    )
}

export default App
