const solution = (s, n) => {
    let mod = "lower";
    const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65));
    
    return [...s].map(char => {
        if(char === " ") return " ";
        
        if(/[A-Z]/.test(char)) {
            mod = "upper";
        } else {
            mod = "lower";
        }
        
        let mIdx = alphabet.indexOf(char.toUpperCase()) + n;
        
        if(mIdx > 25) mIdx -= 26;
        
        if(mod === "lower") {
            return alphabet[mIdx].toLowerCase();
        } else {
            return alphabet[mIdx];
        }
        
    }).join('');
}