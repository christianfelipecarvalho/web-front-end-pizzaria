"use client"
import { OrderProps } from '@/lib/order.type';
import { OrderContext } from '@/providers/order';
import { RefreshCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { toast } from 'sonner';
import { ModalOrder } from '../modal';
import styles from './styles.module.scss';

interface Props{
    orders: OrderProps[]
}

export function Orders({ orders }: Props) {
    const { isOpen, onRequestOpen } = use(OrderContext);
    const router = useRouter();

    async function handleDetailOrder(order_id: string){
        onRequestOpen(order_id);
    }
    function handleRefresh(){
        router.refresh();
        toast.success("Pedidos atualizado com sucesso!")
    }
    return (
        <>
            <main className={styles.container}>
                <section className={styles.containerHeader}>
                    <h2 style={{color: 'white'}}>Ultimos Pedidos</h2>
                    <button onClick={handleRefresh}>
                        <RefreshCcw size={24} color='#3fffa3'/>
                    </button>
                </section>

                <section className={styles.listOrders}>
                    {orders.length === 0 && (
                        <span className={styles.emptyItem}>
                            Nenhum pedido aberto no momento
                        </span>
                    )}
                {orders.map((order) => (
                    <button 
                    key={order.id}
                    className={styles.orderItem}
                    onClick={() => handleDetailOrder(order.id)}
                    >
                    <div className={styles.tag}></div>
                    <span>Mesa {order.table}</span>
                    </button>
                    ))}
                </section>
            </main>

          {isOpen && <ModalOrder/>}
        </>
    )
}