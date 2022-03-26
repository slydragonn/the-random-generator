import Link from "next/link";
import styles from './navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
    return (
        <ul className={styles.conteiner}>
            <li className={styles.element}>
                <Link href='/'>
                    <a><Image
                        src="/home.png"
                        alt="Icono de un candado blanco"
                        width='30px'
                        height='30px'
                    /></a>
                </Link>
            </li>
            <li className={styles.element}>
                <Link href='/collection'>
                    <a><Image
                        src="/collection.png"
                        alt="Icono de la pagina de colección"
                        width='30px'
                        height='30px'
                    /></a>
                </Link>
            </li>
        </ul>
    )
}