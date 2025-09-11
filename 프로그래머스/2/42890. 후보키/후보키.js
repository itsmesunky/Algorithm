function solution(relation) {
    const rowCount = relation.length;
    const colCount = relation[0].length;
    const candidateKeys = new Set();

    // 1. 모든 컬럼 조합(부분집합)을 비트마스크로 생성 및 순회
    // 1부터 시작하여 모든 컬럼의 조합을 나타내는 비트마스크를 생성합니다.
    // 예를 들어, 컬럼이 4개일 때 (10000)2 - 1 = 15(1111)2 까지 순회
    for (let i = 1; i < (1 << colCount); i++) {
        const keyCols = []; // 현재 조합에 포함된 컬럼 인덱스
        
        // 비트마스크 i에서 켜진 비트(1)의 위치를 찾아 컬럼 인덱스로 저장
        for (let j = 0; j < colCount; j++) {
            if ((i & (1 << j)) !== 0) {
                keyCols.push(j);
            }
        }

        // 2. 유일성(Uniqueness) 검사
        // 현재 조합으로 모든 행을 유일하게 식별할 수 있는지 확인
        const tempSet = new Set();
        for (let row = 0; row < rowCount; row++) {
            let rowValue = "";
            for (const col of keyCols) {
                rowValue += relation[row][col];
            }
            tempSet.add(rowValue);
        }

        // Set의 크기가 전체 행의 수와 같다면 유일성 만족
        if (tempSet.size === rowCount) {
            // 3. 최소성(Minimality) 검사
            // 이미 찾은 후보키의 상위 집합인지 확인
            let isSuperset = false;
            for (const candidateKey of candidateKeys) {
                // 이전에 찾은 후보키가 현재 조합의 부분집합인지 확인
                const isSubset = [...candidateKey].every(key => keyCols.includes(key));
                if (isSubset) {
                    isSuperset = true;
                    break;
                }
            }

            // 상위 집합이 아니라면 최소성도 만족
            if (!isSuperset) {
                candidateKeys.add(keyCols);
            }
        }
    }

    return candidateKeys.size;
}