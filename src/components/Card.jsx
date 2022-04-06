import React from 'react';
import { Link } from 'react-router-dom';




const Card = ({ props }) => {




    return <main>
        <Link to={props.location}>
            <div className="card">
                <div className="card-info">
                    <h1>{props.title}</h1>
                    <p>Developed By: {props.developer}</p>
                    <p>{props.info}</p>
                </div>

                <div className="dp-image">
                    <img src={props.dp} alt={props.title} />
                </div>
                <img className='pose-image ' src={props.pose} alt="" />
            </div>
        </Link>
    </main>;
};

export default Card;
