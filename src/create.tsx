import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState, FC, ChangeEvent } from 'react'
import { CreateOrder } from './API'

const Create = () => {
    const [latitude, setLatitude] = useState<number>()
    const [longitude, setLongitude] = useState<number>()
    const [restaurantID, setRestaurant] = useState<number>()

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setLatitude(event.target.value)
    // }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(CreateOrder(latitude, longitude, restaurantID));
    }

    return (
    <Form onSubmit={(event) => { onSubmit(event) }}>
    <Form.Group className="mb-3" controlId="formBasicLatitude">
        <Form.Label>Latitude</Form.Label>
        <Form.Control type="latitude" placeholder="Enter Latitude" onChange={(event) => {setLatitude(Number(event.target.value))}}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicLongitude">
        <Form.Label>Longitude</Form.Label>
        <Form.Control type="longitude" placeholder="Enter Longitude"onChange={(event) => {setLongitude(Number(event.target.value))}}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="Select">Restaurant select menu</Form.Label>
      <Form.Select id="restaurant" onChange={(event) => {setRestaurant(Number(event.target.value))}}>
        <option value={1}>De Bengel</option>
        <option value={2}>Promessa</option>
      </Form.Select>
    </Form.Group>
    <Button variant="primary" type="submit">
        Order
    </Button>
    </Form>
    );
}

export default Create;