import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import {GetAll} from '../API';
import {IOrder} from '../Interfaces/Order';


export default function AllOrders() {

    const [Orders, SetOrders] = useState<IOrder[]>([]);
    useEffect(() => {
        const api = async () => {
            SetOrders(await GetAll());
        };
        api();
    }, []);

    return (
        <div>
            {
                Orders.map((order) => {
                    console.log(Orders[0].id)
                    return(
                        <div>
                            <label>Order Number: {order.id} </label>
                            <label>Order Location: {order.latitude} | {order.longitude} </label>
                            {/* {if(order.restaurantID == 1)} {
                                <label>De Bengel</label>
                            } */}
 
                        </div>
                    ) 
                })          
            }
        </div>
    );
}

