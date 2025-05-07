const solution = (q, r, code) => {
    const charArr = [...code];

    return charArr.reduce((result, char, idx) => {
        return idx % q === r ? result += char : result
    }, "")
}