import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import {GetAll} from './API';
import {IOrder} from './Interfaces/Order';


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
            Test
            {
                Orders.map((order) => {
                    console.log(Orders[0].id)
                    return(
                        <div>
                            {order.id}
                           
                        </div>
                    ) 
                })          
            }
        </div>
    );
}

