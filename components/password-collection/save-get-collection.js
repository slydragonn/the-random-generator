const assignId = (numberOfCharacters) => {
    let passwordId = 'password';
    for (let i = 0; i < numberOfCharacters; i++) {
        let randomNumber = parseInt(Math.random() * 10);
        passwordId = `${passwordId}${randomNumber}`
    }
    return passwordId
}

export const SavePassword = (id) => {
    const passwordValue = document.getElementById(id).value;
    if (!passwordValue) {
        alert('¡No tienes Nada para Guardar!')
        return false
    } else {
        const passwordObject = {
            id: assignId(7),
            value: passwordValue
        }
        localStorage.setItem(passwordObject.id, JSON.stringify(passwordObject))
        return true
    }
}

export const GetPasswords = () => {
    const passwordArr = []

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith('password')) {
            const passwordId = localStorage.key(i)
            const passwordObject = JSON.parse(localStorage.getItem(passwordId))
            passwordArr.push(passwordObject)
        }
    }
    return passwordArr
}