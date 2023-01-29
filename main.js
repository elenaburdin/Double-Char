function doubleChar(str) {
    // Your code here
    let repStr = ''
    for (let i = 0; i < str.length; i++) {
        repStr += str[i] + str[i];
    }
    return repStr;
}
