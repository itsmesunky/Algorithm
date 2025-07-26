const solution = (phone_book) => {
    const sorted = phone_book.sort((a, b) => a.length - b.length);
    
    while(sorted.length) {
        const num = sorted.shift();
        
        if(phone_book.some((v, j) => v.startsWith(num))) {
            return false;
        }
    }
    
    return true;
}