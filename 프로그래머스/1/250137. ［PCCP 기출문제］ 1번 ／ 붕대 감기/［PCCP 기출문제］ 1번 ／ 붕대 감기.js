const solution = (bandage, health, attacks) => {
    // 현재 체력
    let curHealth = health;
    
    // 몬스터의 마지막 공격 시간
    const finalAttackTime = attacks.at(-1)[0];
    
    // 기술 성공 횟수
    let count = 0;
    
    // 0초부터 몬스터의 마지막 공격 시간까지 체력 계산
    for(let i = 0; i <= finalAttackTime; i++) {
        const [attackTime, damage] = attacks.filter(v => i === v[0]).flat();
        
        if(damage) { // 몬스터 공격 시간인 경우
            count = 0;
            curHealth -= damage;
            
            // 체력이 0 이하라면 -1을 리턴
            if(curHealth <= 0) return -1;
        } else { // 몬스터 공격 시간이 아닌 경우
            count++;
            // 현재 체력이 최대 체력보다 작은 경우
            if(curHealth < health) {
                curHealth = Math.min(curHealth + bandage[1], health);
                // 기술 연속 시전 성공이면 추가 회복량 증가
                if(count === bandage[0]) {
                    curHealth = Math.min(curHealth + bandage[2], health);
                }
            }
            
            if(count === bandage[0]) count = 0;
        }
    }
    
    return curHealth;
}