import React from 'react'

export default function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top img_services" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        
                    </div>

                </div>
            </div>

        </>
    )
}
