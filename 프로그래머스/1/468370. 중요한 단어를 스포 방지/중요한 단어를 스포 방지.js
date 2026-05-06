const solution = (message, spoiler_ranges) => {
    const wordMap = new Map();
    const spoilerWordSet = new Set();
    const processedStartIdx = new Set();
    
    // 1. 초기 단어 카운팅 (빈 문자열이 섞여 들어가는 것 방지)
    message.split(" ").forEach(word => {
        if (word) {
            wordMap.set(word, (wordMap.get(word) || 0) + 1);
        }
    });
    
    for(const [start, end] of spoiler_ranges) {
        let lt, rt;
        
        // 단어의 왼쪽 경계(공백) 찾기
        for(lt = start; lt >= 0; lt--) {
            if(message[lt] === ' ') break;
        }
        
        // 단어의 오른쪽 경계(공백) 찾기
        for(rt = end; rt < message.length; rt++) {
            if(message[rt] === ' ') break;
        }
        
        ++lt;
        
        const words = message.slice(lt, rt).split(" ");
        let currentWordStart = lt; 
        
        for(const word of words) {
            // 🚨 핵심 수정: 추출된 단어가 빈 문자열("")이면 무시
            if (!word) {
                currentWordStart += 1; // 공백 1칸 길이만큼 시작 인덱스 이동
                continue;
            }
            
            if(!processedStartIdx.has(currentWordStart)) {
                processedStartIdx.add(currentWordStart);
                
                spoilerWordSet.add(word);
                wordMap.set(word, wordMap.get(word) - 1);
            }
            
            // 다음 단어의 시작 인덱스로 이동 (현재 단어 길이 + 공백 1칸)
            currentWordStart += word.length + 1; 
        }
    }
    
    // 3. 완전히 스포일러 당하지 않은 온전한 단어가 존재하면 삭제
    for(const [key, value] of wordMap) {
        if(0 < value) spoilerWordSet.delete(key);
    }
    
    return spoilerWordSet.size;
}