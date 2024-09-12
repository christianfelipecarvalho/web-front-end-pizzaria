import { getCookieServer } from "@/lib/cookieServer";
import { OrderProps } from "@/lib/order.type";
import { api } from "@/services/api";
import { Orders } from "./components/orders";

async function getOrders(): Promise<OrderProps[] | []>{
    try{
        const token = getCookieServer()
        const response = await api.get('/orders',{
            headers:
            {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data || []
    }
    catch(error){
        console.log('Erro ao buscar os pedidos')
        return []
    }
}

export default async function Dashboard() {
    const orders = await getOrders();
    console.log(orders)
    return (
        <>
           <Orders orders={orders}/>
        </>
    )
}