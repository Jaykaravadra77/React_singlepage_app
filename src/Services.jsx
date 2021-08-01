 
import React from 'react';
import  Sdata from './Sdata';
import Card from './Card';
function Services() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto" >
                        <div className="row">
                            <h1 className="text-center">Our Services</h1>
                        </div>
                        <div className="row gx-4 gy-4 mb-4">

                        
                             {
                                 Sdata.map((data,index)=>{
                                 return  <Card imgsrc={data.imgsrc} key={index} title={data.title} descreption={data.description}/> 
                                 })
                             }
                    


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Services;