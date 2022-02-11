import Avataars from "./Avataars";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import $ from 'jquery';
import { v4 as uuid } from 'uuid';
import "../css/bigCard.css"
import Stopwatch from "./Stopwatch";
import data from "../data"
const BigCard = (props) => {
    // const [foodColor, setFoodColor] = useState("");



    const getColor = (index) => {
        if (data.results[index].foodType === "coffee") {
            return ("coffee");
        }
        else if (data.results[index].foodType === "veg") {
            return ("veg");
        }
        else {
            return ("nonVeg");
        }
    }
    const getTime = () => {

        const timestamp = Date.now();
        return (new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp));


    }

    const renderSmallCARDS = () => {
        return props.item.Orders.map((item, Orderindex) => {
            const index = data.results.findIndex(od => od.id === item.orderId);
            const foodColor = getColor(index);
            const newId = uuid().slice(0, 8);
            if (data.results[index].type === "kitchen") {
                return (
                    <div className="col-lg-3 col-md-4 col-xs-12 ">

                        <div className={"card mb-2 " + foodColor}>
                            <div className="row">
                                <div className="col-4"><img className="card-img-top" style={{ width: "80px", height: "80px", borderRadius: "50%" }} src={data.results[index].image} alt="Card image cap" /></div>
                                <div className="col-8">
                                    <div className="order-card-title">{data.results[index].name}</div>
                                    <div id={"button" + newId} className="btn btn-info" onClick={() => { $("#" + newId + " .thumbsUp").css("display", "inline"); $("#button" + newId).css("display", "none") }}>Ready?</div>
                    <div id={newId}  ><FontAwesomeIcon className="thumbsUp" icon={faThumbsUp}></FontAwesomeIcon></div>
                                    <div style={{fontWeight:"600"}}>Qty : {item.quantity}</div>
                                </div>
                            </div>

                        </div>
                    </div>);
            }
            else {
                return (
                    null
                );
            }

        })

    }
    const rendercardsDisabled = () => {
        return props.item.Orders.map((item, Orderindex) => {
            const index = data.results.findIndex(od => od.id === item.orderId);
            const foodColor = getColor(index);
            const newId = uuid().slice(0, 8);
            if (data.results[index].type === "kitchen") {
                return null;
            }
            else {
                return (
                   
                    <div className="col-lg-3 col-md-4 col-xs-12 ">

                    <div className={"card mb-2 " + foodColor}>
                        <div className="row">
                            <div className="col-4"><img className="card-img-top" style={{ width: "80px", height: "80px", borderRadius: "50%" }} src={data.results[index].image} alt="Card image cap" /></div>
                            <div className="col-8">
                                <div className="order-card-title">{data.results[index].name}</div>
                                <div>{data.results[index].milk}</div>
                                <div>{data.results[index].size}</div>
                                <div style={{fontWeight:"600"}}>Qty : {item.quantity}</div>
                            </div>
                        </div>

                    </div>
                </div>
                );
            }

        })

    }
    return (
        <div className="col-12">
            <div className="card big-card ">
                <div className="row">
                    <div className="col-4 orderNumber">ORDER #{props.item.oId}<div className="orderTime">{getTime(props.item.orderTime)}</div></div>
                    <div className="col-4 orderNumber">PREPARING:<span style={{ marginLeft: "10px", color: "red" }}><Stopwatch /></span></div>
                    <div className="col-4 text-right d-flex justify-content-end align-items-start"><span className="orderNumber mr-3 nameCust" style={{ color: "grey" }}>{props.item["Customer-Name"]}<br />{props.item.address}</span><span><Avataars /></span></div>
                </div>
                <div className="row">
                    {renderSmallCARDS()}
                </div>
                <div className="row">
                    <div id="accordion" className="col-12">

                        <div className="">
                            <div className="card-header" id={"heading"+props.item.oId}>
                                <h5 className="mb-0">
                                    <button className="btn btn-secondary collapsed" data-toggle="collapse" data-target={"#collapse"+props.item.oId} aria-expanded="false" aria-controls={"collapse"+props.item.oId}>
                                        View Barista
                                    </button>
                                </h5>
                            </div>
                            <div id={"collapse"+props.item.oId} className="collapse" aria-labelledby={"heading"+props.item.oId} data-parent="#accordion">
                                <div className="card-body row">
                                {rendercardsDisabled()}
                                </div>
                            </div>
                        </div>

                    </div>
                   
                </div>
            </div>
        </div>

    );
}
export default BigCard;