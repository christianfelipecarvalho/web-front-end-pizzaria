"use client"
import { calculateTotalOrder } from '@/lib/helper';
import { OrderContext } from '@/providers/order';
import { X } from 'lucide-react';
import { use } from 'react';
import styles from './styles.module.scss';

export function ModalOrder(){

    const { onRequestClose, order, finishOrder } = use(OrderContext);
    
    async function handleFinishOrder() {
        await finishOrder(order[0].order.id);
    }
    return (
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <button className={styles.dialogBack} onClick={onRequestClose}>
                    <X size={40} color='#ff3f4b'/>
                </button>

                <article className={styles.container}>
                    <h2>Detalhes do pedido</h2>

                    <span className={styles.table}>
                        Mesa <b>{order[0]?.order?.table}</b>
                    </span> 

                    {order[0]?.order?.name && (

                    <span className={styles.name}>
                      <b >{order[0]?.order?.name}</b>
                    </span> 
                    )}

                    {order.map(item =>(
                        <section className={styles.item} key={item.id}>
                        <span>
                            Qtd: {item?.amount} - <b>{item?.product?.name}</b> - R$ {parseFloat(item.product.price) * item.amount}
                        </span>
                        <span>{item?.product?.description}</span>
                    </section>
                    ))}

                    <h3 className={styles.total}>Valor Total: R$ {calculateTotalOrder(order)}</h3>

                    <button className={styles.buttonOrder} onClick={handleFinishOrder}>
                        Concluir pedido
                    </button>
                </article>
            </section>
        </dialog>
    )
}