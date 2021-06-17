import React, { useState } from 'react'

export default function Contact() {

    const [data,setData]=useState({fullname: "",contact: "",email:"",message:""});

    const inputEvent =(event)=>{
        const { name, value}=event.target;
        setData((pre)=>{
            return {
                ...pre,
                [name]:value
            }
        })

    };

    const formSubmit =(e)=>{
        e.preventDefault();
        alert("Name Entered: "+data.fullname+" Contact Entered: "+data.contact+" email Entered: "+data.email+" Message Entered: "+data.message)

    };
    return (
        <>
            <div className="my-5 ">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container cotact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit }>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contact</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="contact" value={data.contact} onChange={inputEvent} placeholder="Contact Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label"  >Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={inputEvent}></textarea>
                            </div>

                            <div className="col-12 text-center">
                                <button className="btn btn-outline-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
