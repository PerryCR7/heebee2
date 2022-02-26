import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"
import BigCard from './BigCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import coffee from "../assets/coffee-cup-min.png";
import food from "../assets/baristaIcon.png";

import "../css/active.css";

const Active = (props) => {
    const [role, setRole] = useState(props.role);
    props.setTheRole(props.role);

    const TotalOrders = [
        {
            "oId": 1234567,
            "Customer-Name": 'Jane Doe',
            "orderTime": "1607110465663",
            "address":"Sarabha Nagar, 100159071",
            "Orders": [
                {
                    "orderId": "001",
                    "quantity": "2",
                    "descr":"Large, skimmed Milk ",
                    "done":true
                }, {
                    "orderId": "002",
                    "quantity": "1",
                    "descr":"Large, Double Patty , Without Anchovies",
                    "done":false
                }
                ,
                {
                    "orderId": "003",
                    "quantity": "1", 
                    "descr":"Medium, No Milk ",
                    "done":true
                },
                {
                    "orderId": "004",
                    "quantity": "1","descr":"Large, Skimmed Milk  ",
                    "done":false
                },
                {
                    "orderId": "005",
                    "quantity": "1",
                    "descr":"Large, Sour Cream, Cheddar Cheese ",
                    "done":true
                },

                {
                    "orderId": "006",
                    "quantity": "1",
                    "descr":"Large, Cheese Burst ,No Mushrooms",
                    "done":true
                }
            ]
        },
        {
            "oId": 1234568,
            "Customer-Name": 'Jack bauar', 
            "orderTime": "1607110465663",
            "address":"Sarabha Nagar, 100159071",
            "Orders": [
                {
                    "orderId": "003",
                    "quantity": "2",
                    "descr":"Medium, No Milk ","done":true
                }, {
                    "orderId": "001",
                    "quantity": "1",
                    "descr":"Large, skimmed Milk ","done":true
                },
                {
                    "orderId": "006",
                    "quantity": "1",
                    "descr":"Large, No Tomatoes ,Onion,Double Cheese ","done":false
                }
            ]
        },
        {
            "oId": 1236568,
            "Customer-Name": 'Swati Verma', 
            "orderTime": "1607110465663",
            "address":"Sarabha Nagar, 100159071",
            "Orders": [
                {
                    "orderId": "007",
                    "quantity": "2",
                    "descr":"Medium, No Milk ","done":false
                }, {
                    "orderId": "009",
                    "quantity": "1",
                    "descr":"With Fresh mint, lemon ","done":true
                },
                {
                    "orderId": "010",
                    "quantity": "2",
                    "descr":"onion , cheese, tomatoes ","done":false
                }
            ]
        }
    ];
    const renderCards = () => {
        return TotalOrders.map((item, index) => {
            return (
               <div className='container-fluid' key={index}> <div className='row' > <BigCard item={item} role={role}/></div></div>
                
            )
        })
    }
    return (

        // navbar starts
        <React.Fragment>
            <nav className="container-fluid">
                <div className='row ' style={{whiteSpace:"nowrap",borderRadius:"10px" ,margin:"2px", border:"1px solid rgba(0,0,0,.125)",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div className="col-5"><img width="40px" src={logo} alt="logo" style={{marginTop:"10px",marginBottom:"10px"}}/>
                    <span className='main-role cursive '>{role==='kitchen'?"Kitchen":"Barista"}</span>
                    </div>

                    <div className='col-7'>
                        <div style={{ height: "100%" }} className="d-flex justify-content-end align-items-center nav-con ">
                            <Link to="/" className='navbar-link navContent active-button'>{props.role==="kitchen"?<img className='nav-image-logo' src={food} ></img>:<img className='nav-image-logo' src={coffee}  ></img>}<span>Active</span></Link>
                            <Link to="/done" className='navbar-link navContent ready-button'><FontAwesomeIcon  icon={faCircleCheck}></FontAwesomeIcon> <span>Ready</span></Link>
                        </div>

                    </div>
                </div>

            </nav>
            {/* navbar ends */}
            {/* Body of Active js */}
            {renderCards()}
            
        </React.Fragment>


    )
}
export default Active;