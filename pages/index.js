import Head from 'next/head'
import Header from '../components/header'
import Navbar from '../components/navbar'
import PasswordForm from '../components/password-form/form'
//import Image from 'next/image'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>The Random Generator</title>
        <meta name="description" content="Genera contraseñas seguras para proteger tus cuentas personales y profesionales..." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <Navbar />
      <h2 className={styles.description}>Genera contraseñas seguras de manera aleatoria y personalizada</h2>
      <PasswordForm />
    </main>
  )
}
