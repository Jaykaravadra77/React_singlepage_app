import React, { useState } from 'react';
function Contact() {
    let [data,SetData]= useState({
        email:"",
        name:""
    });
    function change(e){
        let {name,value}= e.target;
        console.log(name);

        SetData((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }
    return (
        <>
            <div className="container" style={{minHeight:"82vh"}}>
                <div className="row mt-4">
                    <h1 className="text-center">Contact  Page</h1>
                </div>
                <div className="row mt-3 justify-content-center">
                    <form className="col-md-6">
                        <div className="mb-3">
                            <label   className="form-label">Email address</label>
                            <input type="email" onChange={change} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Message</label>
                             <textarea className="form-control" onChange={change} name="name"  /> 
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Contact;