import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./Website/Web.css"
import Navbar from './Website/Navbar'
import Home from "./Website/Home"
import Services from "./Website/Services"
import About from "./Website/About"
import Contact from "./Website/Contact"
import Footer from './Website/Footer'

export default function Web() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
            <Footer/>
            
        </>
    )
}
