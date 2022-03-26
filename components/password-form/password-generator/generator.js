const characters = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], ['.', ',', '-', '_', '!', '¡', '#', '@', '$', '&', '%', '¿', '?', '/', '*', '+']];
//0 = lowerCase
//1 = upperCase
//2 = numbers
//3 = symbols

const randomCharacters = (characterTypes, lengthValue) => {
    let result = '';

    for (let i = 0; i < lengthValue; i++) {
        let randomCharacterTypes = characterTypes[parseInt(Math.random() * characterTypes.length)]
        let oneCharacter = characters[randomCharacterTypes][parseInt(Math.random() * characters[randomCharacterTypes].length)]

        result += oneCharacter;
    }
    return result;
}

const keywordUbication = (password, keyword, ubication) => {
    if (keyword.length >= password.length) {
        return alert('La PALABRA CLAVE no puede exceder la longitud de la CONTRASEÑA')
    } else {
        const validCharaters = password.length - keyword.length
        let result = '';
        let position;

        if (ubication.startValue) position = 0;
        else if (ubication.mediumValue) position = parseInt(validCharaters / 2)
        else if (ubication.finalValue) position = validCharaters - 1

        for (let i = 0; i <= validCharaters; i++) {
            i == position ? result += keyword : result += password[i];
        }

        return result;
    }
}

const PasswordGenerator = ({ keyword, length, lower, upper, numbers, symbols }) => {
    const display = document.getElementById('displayPassword');
    let password = '';
    let passwordWithKeyword = '';

    if (lower && upper && numbers && symbols) password = randomCharacters([0, 1, 2, 3], length);
    else if (lower && upper && numbers && symbols == false) password = randomCharacters([0, 1, 2], length);
    else if (lower && upper == false && numbers && symbols) password = randomCharacters([0, 2, 3], length);
    else if (lower && upper && numbers == false && symbols) password = randomCharacters([0, 1, 3], length);
    else if (lower == false && upper && numbers && symbols) password = randomCharacters([1, 2, 3], length);
    else if (lower && upper && numbers == false && symbols == false) password = randomCharacters([0, 1], length);
    else if (lower && upper == false && numbers && symbols == false) password = randomCharacters([0, 2], length);
    else if (lower && upper == false && numbers == false && symbols) password = randomCharacters([0, 3], length);
    else if (lower == false && upper && numbers && symbols == false) password = randomCharacters([1, 2], length);
    else if (lower == false && upper && numbers == false && symbols) password = randomCharacters([1, 3], length);
    else if (lower == false && upper == false && numbers && symbols) password = randomCharacters([2, 3], length);
    else if (lower && upper == false && numbers == false && symbols == false) password = randomCharacters([0], length);
    else if (lower == false && upper && numbers == false && symbols == false) password = randomCharacters([1], length);
    else if (lower == false && upper == false && numbers && symbols == false) password = randomCharacters([2], length);
    else if (lower == false && upper == false && numbers == false && symbols) password = randomCharacters([3], length);

    if (keyword.keywordValue) {
        passwordWithKeyword = keywordUbication(password, keyword.keywordValue, keyword.position)
        return display.value = passwordWithKeyword
    } else {
        return display.value = password
    }
}

export default PasswordGenerator