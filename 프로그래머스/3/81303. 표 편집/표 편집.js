const solution = (n, k, cmd) => {
    // 행 삭제 여부
    const isRemoved = Array(n).fill(false);
    // 삭제 행 스택
    const deletedStack = [];
    
    // 이중 연결 리스트
    // 각 행의 이전/다음 행 번호 저장 배열
    const prevRow = Array(n);
    const nextRow = Array(n);
    for(let i = 0; i < n; i++) {
        prevRow[i] = i - 1;
        nextRow[i] = i === n - 1 ? -1 : i + 1;
    }
    
    // 현재 선택 행
    let selectedRow = k;
    
    for(const command of cmd) {
        const [operation, num] = command.split(" ");
        let parseNum = Number(num);
        
        switch(operation) {
            case "U":
                while(parseNum--) selectedRow = prevRow[selectedRow];
                break;
            case "D":
                while(parseNum--) selectedRow = nextRow[selectedRow];
                break;
            case "C":
                // 이전/다음 노드 연결 끊기
                const prev = prevRow[selectedRow];
                const next = nextRow[selectedRow];
                if(prev !== -1) nextRow[prev] = next;
                if(next !== -1) prevRow[next] = prev;
                
                isRemoved[selectedRow] = true;
                deletedStack.push(selectedRow);
                
                selectedRow = nextRow[selectedRow] !== -1 ? nextRow[selectedRow] : prevRow[selectedRow];
                break;
            case "Z":
                const restore = deletedStack.pop();
                if(prevRow[restore] !== -1) nextRow[prevRow[restore]] = restore;
                if(nextRow[restore] !== -1) prevRow[nextRow[restore]] = restore;
                isRemoved[restore] = false;
                break;
        }
    }
    
    return isRemoved.map(bool => bool ? "X" : "O").join('');
}