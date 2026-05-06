const solution = (message, spoiler_ranges) => {
    const wordMap = new Map();
    const spoilerWordSet = new Set();
    
    const processedStartIdx = new Set();
    
    message.split(" ").forEach(word => {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    })
    
    for(const [start, end] of spoiler_ranges) {
        let lt, rt;
        
        for(lt = start; lt >= 0; lt--) {
            if(message[lt] === ' ') break;
        }
        
        lt++;
        
        for(rt = end; rt < message.length; rt++) {
            if(message[rt] === ' ') break;
        }
        
        const words = message.slice(lt, rt).split(" ");
        let startIdx = lt;
        
        for(const word of words) {
            if(!word) {
                startIdx++;
                continue;
            }
            
            if(!processedStartIdx.has(startIdx)) {
                processedStartIdx.add(startIdx);
                wordMap.set(word, wordMap.get(word) - 1);
                spoilerWordSet.add(word);
            }
            
            startIdx += word.length + 1;
        }
    }
    
    for(const [key, value] of wordMap) {
        if(value && spoilerWordSet.has(key)) {
            spoilerWordSet.delete(key);
        }
    }
    
    return spoilerWordSet.size;
}