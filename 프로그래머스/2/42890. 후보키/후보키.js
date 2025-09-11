const solution = (relation) => {
    const R = relation.length;
    const C = relation[0].length;
    const CK = new Set();
    
    for(let i = 1; i <= (1 << C) - 1; i++) {
        const cols = [];
        
        for(let j = 0; j < C; j++) {
            if(i & (1 << j)) cols.push(j);
        }
        
        const set = new Set();
        
        for(let row = 0; row < R; row++) {
            let str = '';
            for(const col of cols) {
                str += `${col}, ${relation[row][col]}`;
            }
            set.add(str);
        }
        
        if(set.size === R) { // 유일성 만족 여부 체크
            // 최소성 체크
            // 현재 컬럼 조합이 이미 찾은 조합의 부분 집합인지 확인
            let isSuperSet = false;
            for(const keys of CK) {
                if(keys.every(key => cols.includes(key))) {
                    isSuperSet = true;
                }
            }
            
            if(!isSuperSet) {
                CK.add(cols);
            }
        }
    }
    
    return CK.size;
}