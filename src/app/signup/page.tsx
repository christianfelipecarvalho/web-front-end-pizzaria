import { api } from '@/services/api'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import styles from '../page.module.scss'
import logoImg from '/public/pizza.png'

export default function Signup() {
    async function handleRegister(formData: FormData){
        "use server"
        const name=formData.get('name')
        const email=formData.get('email')
        const password=formData.get('password')

        if(!name || !email || !password){
            console.log('Preencha todos os campos')
            return
        }
        try{
            const response = await api.post('/users', {name, email, password})
            console.log(response.data)  
        }
        catch(error){
            console.log('Erro ao cadastrar o usuário')
        }
        redirect("/");
    }
    return (
        <>
    <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="Logo da pizzaria"
          priority={true}
          height={80}
          width={420}
          quality={100}
        />

        <section className={styles.login}>
            <h1>Criando sua conta</h1>
          <form action={handleRegister}>
            <input 
              type="text"
              required
              name="name"
              placeholder="Digite seu nome..."
              className={styles.input}
            />
            <input 
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />

            <input 
              type="password"
              required
              name="password"
              placeholder="***********"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Cadastrar
            </button>
          </form>

          <Link href="/" className={styles.text}>
            Já possui uma conta? Faça o login
          </Link>

        </section>

      </div>     
        </>
    )
}