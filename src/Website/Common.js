import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "./portfolio.png"

export default function Common(props) {
   
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.title}<br/> <strong className="brand-name"><i>CryptoBlockzi</i></strong> </h1>
                                    <h2 className="my-3">
                                        With CryptoBlockzi you will learn the art of Trading, a simple yet logical approach to trading financial markets.
                                    </h2>
                                    <div className="mt-3"><NavLink to={props.link} className="btn-get-started">{props.btn}</NavLink></div>
                                </div>

                                <div className="col-lg-6 order-3 order-lg-2 header-img">
                                    <img src={img} alt="Signal" className="img-fluid animated img_trade " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}
