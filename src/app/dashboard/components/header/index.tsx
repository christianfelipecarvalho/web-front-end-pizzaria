
"use client"
import { deleteCookie } from 'cookies-next'
import { LogOutIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import styles from './styles.module.scss'
import logoImg from '/public/pizza.png'

export function Header(){
  const router = useRouter();

  async function handleLogout(){
    deleteCookie("session", {path: "/"})
    toast.success("Deslogado com sucesso!")
    router.replace("/")
  }
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image
            alt="Logo Sujeito Pizza"
            src={logoImg}
            width={180}
            height={50}
            priority={true}
            quality={100}
          />
        </Link>

        <nav>
          <Link href="/dashboard/category">
            Categoria
          </Link>
          <Link href="/dashboard/product">
            Produto
          </Link>

          <form action={handleLogout}>
            <button type='submit'>
              <LogOutIcon size={24} color="#FFF" />
            </button>
          </form>
        </nav>
      </div>
    </header>
  )
}