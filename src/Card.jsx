import React from 'react';
import './index.css';
function Card(props) {
    return(
    <div id="card" className="col-md-4">
        <div className="card"  >
            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"> {props.descreption}</p>
                
            </div>
        </div>
    </div>
    )
}

export default Card;