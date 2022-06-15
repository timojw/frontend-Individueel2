export const GetAll = async () => {
    const data = await fetch ('http://localhost:80/Order/GetAllOrders')
    const json = await data.json();
    return json;
}

export const CreateOrder = async (Latitude:number | undefined, Longitude:number | undefined, RestaurantID:number | undefined) => {
    const data = await 
        fetch (
            'http://localhost:80/Order/CreateOrder',{
                method:"POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                "Latitude":Latitude,
                "Longitude":Longitude,
                "Status":0,
                "RestaurantID": RestaurantID
                })
            }
            )
    return data.status;
}