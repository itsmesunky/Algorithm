/**
* 문제 해결 시나리오
* 1. 이모티콘별 할인율 조합 생성
* 2. 할인율 조합을 순회하면서 조합별 가입자수와 금액을 계산
* 3. 제일 많은 가입자수 조합의 가입자수와 금액을 반환
*/
const solution = (users, emoticons) => {
    // 판매 이모티콘 갯수
    const len = emoticons.length;
    
    // 고정 할인율
    const saleRates = [10, 20, 30, 40];
    
    // 할인율 조합 생성
    const combines = [];
    const getRateCombines = (arr) => {
        if(arr.length === len) {
            combines.push([...arr]);
            return;
        }
        
        for(const rate of saleRates) {
            arr.push(rate);
            getRateCombines(arr);
            arr.pop();
        }
    }
    
    getRateCombines([]);
    
    // 최대 서비스 가입자 수, 최대 판매액
    let maxCount = 0, maxAmount = 0;
    
    for(const combine of combines) {
        // 할인율 조합별 서비스 가입자 수, 판매액
        let regCount = 0, amount = 0;
        
        for(const [userRate, userPrice] of users) {
            let userAmount = 0;
            
            for(let i = 0; i < combine.length; i++) {
                const originPrice = emoticons[i];
                const saleRate = combine[i];
                
                if(userRate <= saleRate) {
                    userAmount += originPrice * ((100 - saleRate) / 100);
                }
            }
            
            if(userAmount >= userPrice) {
                regCount++;
            } else {
                amount += userAmount;
            }
        }
        
        if(maxCount === regCount) {
            maxAmount = Math.max(maxAmount, amount);
        } else if(maxCount < regCount) {
            maxCount = regCount;
            maxAmount = amount;
        }
    }
    
    return [maxCount, maxAmount];
}