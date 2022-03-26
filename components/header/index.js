import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoSection}>
                <Image
                    src="/logo.png"
                    alt="Imagen de un candado"
                    width='80px'
                    height='80px'
                    className={styles.logo}
                />
                <h1 className={styles.logoTitle}>The Random Generator</h1>
            </div>
        </header>
    )
}