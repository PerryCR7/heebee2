import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"
import BigCard from './BigCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';

import "../css/active.css";

const Active = (props) => {
    const [role, setRole] = useState(props.role);

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
                    "descr":"Large, skimmed Milk "
                }, {
                    "orderId": "002",
                    "quantity": "1",
                    "descr":"Large, Double Patty , Without Anchovies"
                }
                ,
                {
                    "orderId": "003",
                    "quantity": "1", 
                    "descr":"Medium, No Milk "
                },
                {
                    "orderId": "004",
                    "quantity": "1","descr":"Large, Skimmed Milk  "
                },
                {
                    "orderId": "005",
                    "quantity": "1",
                    "descr":"Large, Sour Cream, Cheddar Cheese "
                },

                {
                    "orderId": "006",
                    "quantity": "1",
                    "descr":"Large, Cheese Burst ,No Mushrooms"
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
                    "descr":"Medium, No Milk "
                }, {
                    "orderId": "001",
                    "quantity": "1",
                    "descr":"Large, skimmed Milk "
                },
                {
                    "orderId": "006",
                    "quantity": "1",
                    "descr":"Large, No Tomatoes ,Onion,Double Cheese "
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
                    "descr":"Medium, No Milk "
                }, {
                    "orderId": "009",
                    "quantity": "1",
                    "descr":"With Fresh mint, lemon "
                },
                {
                    "orderId": "010",
                    "quantity": "2",
                    "descr":"onion , cheese, tomatoes "
                }
            ]
        }
    ];
    const renderCards = () => {
        return TotalOrders.map((item, index) => {
            return (
                <div className='row' key={index}> <BigCard item={item} role={role}/></div>
                
            )
        })
    }
    return (

        // navbar starts
        <React.Fragment>
            <nav className="container-fluid" style={{backgroundColor:"white"}}>
                <div className='row pl-1' style={{whiteSpace:"nowrap"}}>
                    <div className="col-5"><img width="70px" src={logo} alt="logo" style={{marginTop:"10px",marginBottom:"5px"}}/>
                    <span className='main-role'>{role==='kitchen'?"Kitchen":"Barista"}</span>
                    </div>

                    <div className='col-7'>
                        <div style={{ height: "100%" }} className="d-flex justify-content-end align-items-center nav-con ">
                            <Link to="/" className='navbar-link navContent active-button'><FontAwesomeIcon icon={faAppleWhole}></FontAwesomeIcon><span>Active</span></Link>
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