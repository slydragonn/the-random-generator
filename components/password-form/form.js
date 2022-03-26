import { useState, useEffect } from "react";

import DisplayPassword, { getSafetyInfo } from "./display-password/display";
import PasswordGenerator from "./password-generator/generator";

import styles from './form.module.css'

export default function PasswordForm() {
    const [safetyInfo, setSafe] = useState(null)

    const [keyword, setKeyword] = useState(
        {
            keywordValue: '',
            position: {
                startValue: false,
                mediumValue: false,
                finalValue: false
            }
        });

    const [lengthValue, setLengthValue] = useState(12)

    const [lowerCase, setLowerCase] = useState(true)

    const [upperCase, setUpperCase] = useState(true)

    const [numberValue, setNumberValue] = useState(true)

    const [symbolValue, setSymbolValue] = useState(true)

    const [idCheckbox, setId] = useState('');

    useEffect(() => {
        avoidAllFalseValues(idCheckbox)
    })

    const avoidAllFalseValues = (id) => {
        if (lowerCase == false && upperCase == false && numberValue == false && symbolValue == false) {

            document.getElementById(id).checked = true

            if (id == 'lowerCheck') return setLowerCase(document.getElementById(id).checked)
            else if (id == 'upperCheck') return setUpperCase(document.getElementById(id).checked)
            else if (id == 'numberCheck') return setNumberValue(document.getElementById(id).checked)
            else if (id == 'symCheck') return setSymbolValue(document.getElementById(id).checked)
        }
        return
    }

    const handleSubmit = (event) => {
        const keyword = {
            keywordValue: document.getElementById('keyword').value,
            position: {
                startValue: document.getElementById('start').checked,
                mediumValue: document.getElementById('medium').checked,
                finalValue: document.getElementById('final').checked
            }
        };
        const lengthValue = document.getElementById('lengthValue').value;
        const lowerCase = document.getElementById('lowerCheck').checked;
        const upperCase = document.getElementById('upperCheck').checked;
        const numberValue = document.getElementById('numberCheck').checked;
        const symbolValue = document.getElementById('symCheck').checked

        const passwordValues = {
            keyword,
            length: parseInt(lengthValue),
            lower: lowerCase,
            upper: upperCase,
            numbers: numberValue,
            symbols: symbolValue
        }

        setKeyword(passwordValues.keyword)
        setLengthValue(passwordValues.length)
        setLowerCase(passwordValues.lower)
        setUpperCase(passwordValues.upper)
        setNumberValue(passwordValues.numbers)
        setSymbolValue(passwordValues.symbols)

        PasswordGenerator(passwordValues)

        setSafe(getSafetyInfo())

        event.preventDefault();
    }

    const handleChange = (id) => {
        if (id == 'lowerCheck') setLowerCase(document.getElementById(id).checked)
        else if (id == 'upperCheck') setUpperCase(document.getElementById(id).checked)
        else if (id == 'numberCheck') setNumberValue(document.getElementById(id).checked)
        else if (id == 'symCheck') setSymbolValue(document.getElementById(id).checked)

        return setId(id)
    }
    return (
        <section className={styles.allForm}>
            <DisplayPassword keyword={keyword} length={lengthValue} lower={lowerCase} upper={upperCase} numbers={numberValue} symbols={symbolValue} safe={safetyInfo} />
            <form onSubmit={handleSubmit} className={styles.form}>
                <h3>Personalizar</h3>
                <section className={styles.container}>
                    <section className={styles.containerKL}>
                        <label>
                            <span className={styles.keywordLabel}>Palabra clave:</span>
                            <input type='text' className={styles.keyword} id='keyword' placeholder="Ejem: Mascota123" />
                            <section className={styles.positionSection}>
                                Posicion:
                                <label className={styles.positionItem}>
                                    <input type='radio' name="position" value='start' id='start' defaultChecked />
                                    Inicio</label>
                                <label className={styles.positionItem}>
                                    <input type='radio' name="position" value='medium' id='medium' />
                                    Medio</label>
                                <label className={styles.positionItem}>
                                    <input type='radio' name="position" value='final' id='final' />
                                    Final</label>
                            </section>
                        </label>
                        <label className={styles.lengthLabel}>
                            Longitud:
                            <input className={styles.length} type='number' min='1' max='50' id="lengthValue" defaultValue={lengthValue} />
                        </label>
                    </section>
                    <section className={styles.characters}>
                        <div className={styles.charDiv}>
                            <label className={styles.charItems}>
                                Minúsculas:
                                <input className={styles.charCheckbox} id="lowerCheck" type='checkbox' defaultChecked onChange={() => handleChange('lowerCheck')} />
                            </label>
                            <label className={styles.charItems}>
                                Mayúsculas:
                                <input className={styles.charCheckbox} id="upperCheck" type='checkbox' defaultChecked onChange={() => handleChange('upperCheck')} />
                            </label>
                        </div>
                        <div className={styles.charDiv}>
                            <label className={styles.charItems}>
                                Números:
                                <input className={styles.charCheckbox} id="numberCheck" type='checkbox' defaultChecked onChange={() => handleChange('numberCheck')} />
                            </label>
                            <label className={styles.charItems}>
                                Simbolos:
                                <input className={styles.charCheckbox} id="symCheck" type='checkbox' defaultChecked onChange={() => handleChange('symCheck')} />
                            </label>
                        </div>
                    </section>
                </section>
                <input type='submit' value='Generar' className={styles.generate} />
            </form>
        </section>
    );
}