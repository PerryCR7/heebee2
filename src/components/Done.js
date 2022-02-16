import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import coffee from "../assets/coffee-cup-min.png";
import food from "../assets/baristaIcon.png";
import data from "../data";
import "../css/done.css";
import { v4 as uuid } from 'uuid';
import Avataars from './Avataars';
const Done = (props) => {
    const [role, setRole] = useState(props.role);
    const getTime = () => {

        const timestamp = Date.now();
        return (new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp));


    }
    const ReadyOrders = [
        {
            "oId": 1234565,
            "Customer-Name": 'Angela Yu',
            "orderTime": "1607110465663",
            "address": "Sarabha Nagar, 100159071",
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
            "oId": 1234566,
            "Customer-Name": 'Kim Seokjin',
            "orderTime": "1607110465663",
            "address": "Sarabha Nagar, 100159071",
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
        }, {
            "oId": 1234534,
            "Customer-Name": 'Kim Taehyung',
            "orderTime": "1607110465663",
            "address": "Sarabha Nagar, 100159071",
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
        },{
            "oId": 1234598,
            "Customer-Name": 'Angela Yu',
            "orderTime": "1607110465663",
            "address": "Sarabha Nagar, 100159071",
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
            "oId": 1234599,
            "Customer-Name": 'Kim Seokjin',
            "orderTime": "1607110465663",
            "address": "Sarabha Nagar, 100159071",
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
        }, {
            "oId": 1234569,
            "Customer-Name": 'Kim Taehyung',
            "orderTime": "1607110465663",
            "address": "Sarabha Nagar, 100159071",
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
    const renderSmall = (item) => {

        return item.Orders.map((orderItem, orderIndex) => {
            const newId = uuid().slice(0, 8);
            const index = data.results.findIndex(od => od.id === orderItem.orderId);
            if (data.results[index].type === "baristo") {
                return (
                    <div key={newId} className='d-flex mt-3'>
                        <div className='w-30 d-flex justify-content-center align-items-center'><img className="DoneImage" style={{ borderRadius: "10px" }} src={data.results[index].image} alt={newId + "IMAGE"}></img></div>
                        <div className='w-70 ready-small-content'>
                            <div className="order-card-title cursive">{data.results[index].name}</div>

                            <div className="order-card-text cursive">{orderItem.descr}</div>
                            <div className="quan" >QTY:{orderItem.quantity}</div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div key={newId} className='d-flex mt-3'>
                        <div className='w-30 d-flex justify-content-center align-items-center'><img className="DoneImage"  style={{ borderRadius: "10px" }} src={data.results[index].image} alt={newId + "IMAGE"}></img></div>
                        <div className='w-70 ready-small-content'>
                            <div className="order-card-title cursive">{data.results[index].name}</div>
                            <div className="order-card-text cursive">{orderItem.descr}</div>
                            <div className="quan" >QTY:{orderItem.quantity}</div>
                        </div>
                    </div>
                );
            }

        });
    }
    const BigCard = () => {
        return ReadyOrders.map((item, index) => {
            return (
                <div key={index} className='col-lg-4 col-md-6 col-sm-6 col-xs-12 mt-3'>
                    <div className="card outer-scroll" style={{ width: "100%" , borderRadius:"10px", overflow:"hidden" }}>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-8 orderNumber'>Order#{item.oId}<br /><span className='orderTime'>{item['Customer-Name']}</span> <div className="orderTime" style={{whiteSpace:"nowrap"}}>{getTime(item.orderTime)}</div>
                                </div>
                                <div className='col-4 d-flex justify-content-end '><Avataars /></div>
                            </div>
                            <div className='innerScroll mt-2' style={{  overflowY: "auto" }}>
                                {renderSmall(item)}
                            </div>

                        </div>
                    </div>

                </div>
            );
        })
    }
    return (
        <React.Fragment>
            <nav className="container-fluid">
            <div className='row ' style={{whiteSpace:"nowrap",borderRadius:"10px" ,margin:"2px", border:"1px solid rgba(0,0,0,.125)",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div className="col-5"><img width="40px" src={logo} alt="logo" style={{marginTop:"10px",marginBottom:"10px"}}/>
                        <span className='main-role mr cursive'>Ready Orders</span>
                    </div>
                    <div className='col-7'>
                        <div style={{ height: "100%" }} className="d-flex justify-content-end align-items-center nav-con ">
                        <Link to="/" className='navbar-link navContent ready-button'>{props.role==="kitchen"?<img className='nav-image-logo' src={food} ></img>:<img className='nav-image-logo' src={coffee}  ></img>}<span>Active</span></Link>
                       
                            <Link to="/done" className='navbar-link navContent active-button '><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> <span>Ready</span></Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* navbar ends */}
            <div className='container-fluid'>
                <div className='row'>
                    {BigCard()}
                </div>
            </div>


        </React.Fragment>);
}
export default Done;