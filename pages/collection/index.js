import Head from "next/head"
import Header from "../../components/header"
import Navbar from "../../components/navbar"
import DisplayCollection from "../../components/password-collection/display-collection/display"
import styles from '../../styles/collection.module.css'

export default function PasswordCollection() {
    return (
        <main className={styles.main}>
            <Head>
                <title>Random Password</title>
                <meta name="description" content="Colección de tus contraseñas seguras generadas automatica y aleatoriamente" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Navbar />
            <section className={styles.listSection}>
                <h1>Colección de Contraseñas</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.titleTable}>Lista de contraseñas</th>
                        </tr>
                    </thead>
                    <tbody id='passwordTable'>
                        <DisplayCollection idTable='passwordTable' />
                    </tbody>
                </table>
            </section>
        </main>
    )
}