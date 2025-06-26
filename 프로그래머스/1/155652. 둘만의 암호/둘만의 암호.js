const ALPHABET = Array.from({length: 26}, (_, j) => String.fromCharCode(j + 97));

const solution = (s, skip, index) => {
    return [...s].map(char => {
        const currentIdx = ALPHABET.indexOf(char);
        
        let counter = 0;
        let pointer = currentIdx + 1;
        
        while(counter < index) {
            if(!skip.includes(ALPHABET[pointer % 26])) {
                counter++;
            } 
            
            pointer++;
        }
        
        return ALPHABET[(pointer - 1) % 26];
    }).join('');
}