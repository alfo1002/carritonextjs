"use client"
import useSWR from "swr";
import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { OrderWithProducts } from "@/src/types";
//import { prisma } from "@/src/lib/prisma";
//import { revalidatePath } from "next/cache";

/* async function getPendingOrders() {
const orders = await prisma.order.findMany({
     where: {
         status: false
     },
     include: {
         orderProducts: {
             include: {
                 product: true
             }
         }
     }
 })
 return orders 
}*/

export default function OrderPage() {
    /* const orders = await getPendingOrders()

    //comportamiento manual para obtener pedidos
    const refreshOrders = async () => {
        "use server"
        revalidatePath("/admin/orders")
    } */

    const url = '/admin/orders/api'
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 600000, //tiempo de refresco de 10 minutos
        revalidateOnFocus: false // no refrescar al enfocar la pestaña
    })
    if (isLoading) return <p>Cargando...</p>
    if (data) return (
        <>
            <Heading>Administrar Ordenes</Heading>

            {/* <form
                action={refreshOrders}
            >
                <input
                    type="submit"
                    value="Actualizar Ordenes"
                    className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
                />
            </form> */}

            {
                data.length ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
                        {
                            data.map(order => (
                                <OrderCard
                                    key={order.id}
                                    order={order} />
                            ))
                        }
                    </div>
                ) : <p className="text-center">No hay ordenes pendientes</p>
            }
        </>
    )
}
