const solution = (s, n) => {
    return [...s].map(char => {
        if(char === " ") return " ";
        
        const base = char === char.toUpperCase() ? 65 : 97;
        return String.fromCharCode((char.charCodeAt(0) - base + n) % 26 + base);
    }).join('');
}