export const GetAll = async () => {
    const data = await fetch ('https://localhost:44345/Order/GetAllOrders')
    const json = await data.json();
    return json;
}