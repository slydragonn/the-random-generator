import { useState, useEffect } from "react";
import Image from "next/image";

import PasswordGenerator from "../password-generator/generator";
import { SavePassword } from "../../password-collection/save-get-collection";
import ButtonMessage from "../../feedback/button-message";

import styles from './display.module.css'

export const getSafetyInfo = () => {
    const password = document.getElementById('displayPassword').value
    const passwordLength = password.length;

    if (passwordLength < 7) return 'Insegura'
    else if (passwordLength > 6 && passwordLength < 9) return 'Poco Segura'
    else if (passwordLength > 8 && passwordLength < 12) return 'Regular'
    else if (passwordLength > 11 && passwordLength < 16) return 'Segura'
    else if (passwordLength > 15) return 'Muy Segura'
}

const DisplayPassword = ({ keyword, length, lower, upper, numbers, symbols, safe }) => {

    const [safetyInfo, setSafe] = useState(null)

    useEffect(() => {
        setSafe(safe)
    }, [safe])

    const [showMs, setShow] = useState(false)
    const [showMsSave, setMsSave] = useState(false)


    const handleClick = () => {
        const passwordValues = {
            keyword,
            length,
            lower,
            upper,
            numbers,
            symbols
        }
        PasswordGenerator(passwordValues)
        return setSafe(getSafetyInfo())
    }

    const handleChange = () => {
        return setSafe(getSafetyInfo())
    }

    const copyPassword = () => {
        const display = document.getElementById('displayPassword').value
        navigator.clipboard.writeText(display)
        setShow(true)
        return setTimeout(() => setShow(false), 1500)
    }

    return (
        <>
            <section className={styles.sectionDisplay}>
                <div className={styles.display}>
                    <input type='text' className={styles.inputDisplay} id="displayPassword" onChange={handleChange} />
                    <div>
                        <button className={styles.buttons} data-testid='restar' onClick={handleClick}>
                            <Image
                                src="/restart.png"
                                alt="Icono de restablecer"
                                width='30px'
                                height='30px'
                            /></button>
                    </div>
                    <div className={styles.displayButtons} data-testid='message'>
                        <button className={styles.buttons} data-testid='copy' onClick={copyPassword} >
                            <Image
                                src="/copy.png"
                                alt="Icono de copiar"
                                width='30px'
                                height='30px'
                            /></button>
                        <ButtonMessage message='Copiado' showMessage={showMs} />
                    </div>
                </div>
                <div className={styles.containerSave}>
                    <button className={styles.saveButton} data-testid='save' onClick={() => {
                        const show = SavePassword('displayPassword')
                        if (show) {
                            setMsSave(true)
                            return setTimeout(() => setMsSave(false), 1500)
                        }
                        return
                    }}>
                        <Image
                            src="/save.png"
                            alt="Icono de guardar"
                            width='40px'
                            height='40px'
                        />
                    </button>
                    <ButtonMessage message='Guardado' showMessage={showMsSave} />
                </div>
            </section>
            <div className={styles.safetyContainer}>
                <div className={styles.safetyInfo}><p data-testid='safeInfo'>{safetyInfo ? safetyInfo : 'Seguridad de la Contraseña'}</p></div>
            </div>
        </>
    )
}

export default DisplayPassword