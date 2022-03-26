import { useEffect, useState } from 'react'
import styles from './message.module.css'

const ButtonMessage = ({ message, showMessage }) => {
    const [show, setShow] = useState(styles.noDisplay)

    useEffect(() => {
        showMessage ? setShow(styles.display) : setShow(styles.noDisplay);
    }, [showMessage])

    return (
        <div className={show}>
            <p>{message}</p>
        </div>
    )
}

export default ButtonMessage