import { getCookieServer } from '@/lib/cookieServer';
import { api } from '@/services/api';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '../components/button';
import styles from './styles.module.scss';

export default function Category(){

    const token = getCookieServer();
    
    async function handleRegisterCategory(formData: FormData){
        "use server"

        const name = formData.get("name")

        if(name === '') return;
        console.log(name)

        const data = {
            name: name,
        }

       const response =  await api.post('/category', data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
           
        .catch((err) =>{
            toast.error("Erro ao adicionar categoria! " + err)
            console.error(err)
            return; 
        })
        redirect('/dashboard')


    }
    return (
        <main className={styles.container}>
            <h1>Nova categoria</h1>

            <form className={styles.form} action={handleRegisterCategory}>
                <input 
                type='text'
                name='name'
                placeholder='Nome da categoria, ex: Pizza'
                required
                className={styles.input}
                />

                <Button  name='Cadastrar'/>
            </form>
        </main>
    )
}