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
            if (data.results[index].type === props.role) {
                if (props.role === "kitchen") {
                    return (
                        <div key={newId} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-3 ">

                            <div className={"card p-2 mb-2 " + foodColor}>
                                <div className="row">
                                    <div className="col-4"><img className="card-img-top" style={{ width: "80px", height: "80px", borderRadius: "50%" }} src={data.results[index].image} alt="Card image cap" /></div>
                                    <div className="col-8">
                                        <div className="order-card-title">{data.results[index].name}</div>
                                        <div className="order-card-text">{item.descr}</div>
                                        <div className="quantity" >{item.quantity}</div>
                                        <div id={"button" + newId} className="btn btn-check" onClick={() => { $("#" + newId + " .thumbsUp").css("display", "inline"); $("#button" + newId).css("display", "none") }}>✔?</div>
                                        <div id={newId}  ><FontAwesomeIcon className="thumbsUp" icon={faThumbsUp}></FontAwesomeIcon></div>

                                    </div>
                                </div>

                            </div>
                        </div>);
                }
                else {
                    return (
                        <div key={newId} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 ">

                            <div className={"card mb-2 " + foodColor}>
                                <div className="row">
                                    <div className="col-4"><img className="card-img-top" style={{ width: "80px", height: "80px", borderRadius: "50%" }} src={data.results[index].image} alt="Card image cap" /></div>
                                    <div className="col-8">
                                        <div className="order-card-title">{data.results[index].name}</div>
                                        <div className="order-card-text">{item.descr}</div>
                                        <div id={"button" + newId} className="btn btn-check" onClick={() => { $("#" + newId + " .thumbsUp").css("display", "inline"); $("#button" + newId).css("display", "none") }}>✔?</div>
                                        <div id={newId}  ><FontAwesomeIcon className="thumbsUp" icon={faThumbsUp}></FontAwesomeIcon></div>
                                        <div className="quantity" style={{ fontWeight: "600" }}>{item.quantity}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                }
            }
            else {
                return null;
            }



        })

    }
    const rendercardsDisabled = () => {
        return props.item.Orders.map((item, Orderindex) => {
            const index = data.results.findIndex(od => od.id === item.orderId);
            const foodColor = getColor(index);
            const newId = uuid().slice(0, 8);
            if (data.results[index].type === props.role) {
                return null;
            }
            else {
                if (data.results[index].type === "baristo") {
                    return (

                        <div key={newId} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 ">

                            <div className={"card mb-2 " + foodColor}>
                                <div className="row">
                                    <div className="col-4"><img className="card-img-top" style={{ width: "80px", height: "80px", borderRadius: "50%" }} src={data.results[index].image} alt="Card image cap" /></div>
                                    <div className="col-8">
                                        <div className="order-card-title">{data.results[index].name}</div>
                                        <div className="order-card-text">{item.descr}</div>
                                        <div className="quantity" style={{ fontWeight: "600" }}>{item.quantity}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                }
                else {
                    return (
                        <div key={newId} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-3 ">

                            <div className={"card mb-2 " + foodColor}>
                                <div className="row">
                                    <div className="col-4 text-center"><img className="card-img-top" style={{ width: "80px", height: "80px", borderRadius: "50%" }} src={data.results[index].image} alt="Card image cap" /></div>
                                    <div className="col-8">
                                        <div className="order-card-title">{data.results[index].name}</div>
                                        <div className="order-card-text">{item.descr}</div>
                                        <div className="quantity" style={{ fontWeight: "600" }}>{item.quantity}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }

            }

        })

    }
    return (
        <div className="col-12">
            <div className="card big-card ">
                <div className="row">
                    <div className="col-4 orderNumber"><span style={{ whiteSpace: "nowrap" }}>ORDER #{props.item.oId}</span><div className="orderTime">{getTime(props.item.orderTime)}</div></div>
                    <div className="col-4 orderNumber" style={{ whiteSpace: "nowrap" }}>PREPARING:<span style={{ marginLeft: "10px", color: "red" }}><Stopwatch /></span></div>
                    <div className="col-4 text-right d-flex justify-content-end align-items-start"><span className="orderNumber mr-3 nameCust" style={{ color: "grey" }}>{props.item["Customer-Name"]}<br />{props.item.address}</span><span><Avataars /></span></div>
                </div>
                <div className="row">
                    {renderSmallCARDS()}
                </div>
                <div className="row">
                    <div id="accordion" className="col-12">

                        <div >
                            <div className="card-header" id={"heading" + props.item.oId} style={{ padding: "0 !important" }}>
                                <h5 className="mb-0">
                                    <button className="btn btn-secondary collapsed" data-toggle="collapse" data-target={"#collapse" + props.item.oId} aria-expanded="false" aria-controls={"collapse" + props.item.oId}>
                                        View {props.role === "kitchen" ? "Barista" : "Kitchen"}
                                    </button>
                                </h5>
                            </div>
                            <div id={"collapse" + props.item.oId} className="collapse" aria-labelledby={"heading" + props.item.oId} data-parent="#accordion">
                                <div className="row">
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