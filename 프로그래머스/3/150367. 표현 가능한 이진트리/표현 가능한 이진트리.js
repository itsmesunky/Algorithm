/**
* 문제 해결 시나리오
* - 목표: numbers[i]로 포화 이진 트리를 만들 수 있는지 여부를 검사
* - 포화 이진 트리 특성
* - 노드의 개수가 무조건 2^k(트리의 높이) - 1
* 1. numbers[i]를 2진수로 변환했을 때 2^k - 1이 아니라면 padStart로 0을 채워서 2^k - 1의 길이로 만든다.
* 2. 재귀 함수를 이용해 루트 노드, 왼쪽 서브 트리, 오른쪽 서브 트리로 나눈다.
* 3. 만약, 루트 노드가 0인데 좌/우 서브 트리에 1이 있다면 불가능하므로 0을 리턴
* 4. 그렇지 않다면 1을 리턴
*/
const solution = (numbers) => {
    const nodes = [];
    
    // 포화 이진 트리가 되기 위한 노드 갯수 배열
    for(let k = 1; k <= 6; k++) {
        nodes[k - 1] = Math.pow(2, k) - 1;
    }
    
    /**
    * isValid: 현재 2진수로 포화 이진트리 생성 가능 여부 판별 함수
    * @param {string} bin - 2진수
    */
    const isValid = (string) => {
        const len = string.length;
        if(len === 1) return true;
        
        const parent = Math.floor(len / 2);
        const left = string.slice(0, parent);
        const right = string.slice(parent + 1);
        
        if(string[parent] === '0') { // 루트 노드가 0일 때
            if(left.includes('1') || right.includes('1')) { // 서브 노드에 '1'이 있는 경우
                return false;
            }
            return true;
        }
        
        return isValid(left) && isValid(right);
    }
    
    return numbers.map(number => {
        let bin = number.toString(2);
        bin = bin.padStart(nodes.find(node => bin.length <= node), '0');
        
        return isValid(bin) ? 1 : 0;
    })
}