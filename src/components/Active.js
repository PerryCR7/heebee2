import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.png"
import BigCard from './BigCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
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
                    "quantity": "2"
                }, {
                    "orderId": "002",
                    "quantity": "1"
                }
                ,
                {
                    "orderId": "003",
                    "quantity": "1"
                },
                {
                    "orderId": "004",
                    "quantity": "1"
                },
                {
                    "orderId": "005",
                    "quantity": "1"
                },

                {
                    "orderId": "006",
                    "quantity": "1"
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
                    "quantity": "2"
                }, {
                    "orderId": "001",
                    "quantity": "1"
                },
                {
                    "orderId": "006",
                    "quantity": "1"
                }
            ]
        }
    ];
    const renderCards = () => {
        return TotalOrders.map((item, index) => {
            return (
                <div className='row'> <BigCard item={item} role={role}/></div>
                
            )
        })
    }
    return (

        // navbar starts
        <React.Fragment>
            <nav className="container-fluid bg-light">
                <div class='row' style={{whiteSpace:"nowrap"}}>
                    <div className="col-5"><img width="70px" src={logo} alt="logo" style={{margin:"10px 0 5px 0"}}/>
                    <span className='main-role'>{role==='kitchen'?"Kitchen":"Barista"}</span>
                    </div>

                    <div className='col-7'>
                        <div style={{ height: "100%" }} className="d-flex justify-content-end align-items-center nav-con ">

                           

                            <div className='navbar-link navContent active-button'><FontAwesomeIcon className="thumbsUp" icon={faAppleWhole}></FontAwesomeIcon><span>Active</span></div>

                            <div className='navbar-link navContent'><FontAwesomeIcon className="thumbsUp" icon={faCircleCheck}></FontAwesomeIcon> <span>Done</span></div>

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