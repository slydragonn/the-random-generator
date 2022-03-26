import { useState, useEffect } from "react"
import Image from 'next/image'

import { GetPasswords } from "../save-get-collection"
import styles from './display-collection.module.css'

const DisplayCollection = (props) => {
    const [collection, setCollection] = useState([])

    useEffect(() => {
        setCollection(GetPasswords())
    }, [])

    const [showMs, setShow] = useState(false)

    const copyPassword = (id) => {
        const password = document.getElementById(id).innerText
        return navigator.clipboard.writeText(password)
    }

    const deletePassword = (id) => {
        const passwordTable = document.getElementById(props.idTable)
        const parentOfPasswordElement = document.getElementById(id).parentElement;

        localStorage.removeItem(id)

        return passwordTable.removeChild(parentOfPasswordElement)
    }

    if (collection.length > 0) {
        let list = collection.map(el => (
            <tr key={el.id}>
                <td id={el.id} className={styles.password}>{el.value}</td>
                <td className={styles.td}><button className={styles.copy} onClick={() => copyPassword(el.id)}>
                    <Image
                        src="/copy.png"
                        alt="Icono de copiar"
                        width='30px'
                        height='30px'
                    /></button>
                </td>
                <td className={styles.td}><button className={styles.delete} onClick={() => deletePassword(el.id)}>
                    <Image
                        src="/delete.png"
                        alt="Icono de borrar"
                        width='30px'
                        height='30px'
                    /></button></td>
            </tr>
        ))
        return list
    } else {
        return (
            <tr><td>No hay Contraseñas Guardadas</td></tr>
        )
    }

}
//<ButtonMessage message='Copiado' showMessage={true} />
export default DisplayCollection