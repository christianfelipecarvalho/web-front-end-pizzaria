"use client"
import { OrderProps } from '@/lib/order.type';
import { OrderContext } from '@/providers/order';
import { RefreshCcw } from 'lucide-react';
import { use } from 'react';
import { ModalOrder } from '../modal';
import styles from './styles.module.scss';

interface Props{
    orders: OrderProps[]
}

export function Orders({ orders }: Props) {
    const { isOpen, onRequestOpen } = use(OrderContext);

    return (
        <>
            <main className={styles.container}>
                <section className={styles.containerHeader}>
                    <h2>Ultimos Pedidos</h2>
                    <button>
                        <RefreshCcw size={24} color='#3fffa3'/>
                    </button>
                </section>

                <section className={styles.listOrders}>
                {orders.map((order) => (
                    <button 
                    key={order.id}
                    className={styles.orderItem}>
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