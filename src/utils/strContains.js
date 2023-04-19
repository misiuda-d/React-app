const strCointains = (string1, string2) => {
    if (string1.toLowerCase().includes(string2.toLowerCase())) {
        return true;
    }
    else return false;
}

export default strCointains;