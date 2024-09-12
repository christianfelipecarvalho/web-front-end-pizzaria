import { X } from 'lucide-react';
import styles from './styles.module.scss';


export function ModalOrder(){
    return (
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <button className={styles.dialogBack}>
                    <X size={40} color='#ff3f4b'/>
                </button>

                <article className={styles.container}>
                    <h2>Detalhes do pedido</h2>

                    <span className={styles.table}>
                        Mesa <b>36</b>
                    </span> 

                    <section className={styles.item}>
                        <span>1 - <b>Pizza catupiry</b></span>
                        <span>Pizza de frango com catupiry, borda recheada</span>
                    </section>

                    <button className={styles.buttonOrder}>
                        Concluir pedido
                    </button>
                </article>
            </section>
        </dialog>
    )
}