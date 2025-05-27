const solution = (strings, n) => {
    return strings.sort((a, b) => {
        const [charCodeA, charCodeB] = [a[n].charCodeAt(0), b[n].charCodeAt(0)]
        
        if(charCodeA - charCodeB < 0) {
            return -1;
        } else if(charCodeA - charCodeB > 0) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    });
}