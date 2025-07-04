const solution = (park, routes) => {
    // 공원 좌표
    const arr = Array.from({length: park.length}, () => Array(park[0].length).fill(0));
    
    // 현재 위치를 저장할 변수
    let [posY, posX] = [];
    
    // 장애물 좌표를 저장할 변수
    const xs = [];
    
    // 장애물 존재, 좌표 벗어남 여부
    let isExistX = false;
    let isOverflow = false;
    
    // 공원 좌표에 표시
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[i].length; j++) {
            arr[i][j] = park[i][j];
            
            // 시작 지점 확인
            if(park[i][j] === "S") {
                posY = i;
                posX = j;
            }
            
            // 장애물 여부 확인
            if(park[i][j] === "X") {
                xs.push([i, j]);
            }
        }
    }
    
    for(const route of routes) {
        const [op, n] = route.split(" ");
        
        const move = parseInt(n);
        
        switch(op) {
        case "N": // 위로 이동
            isExistX = xs.find(([y, x]) => x === posX && y < posY && (posY - move) <= y);
            isOverflow = posY - move < 0;

            if(!isExistX && !isOverflow) posY -= move;
            break;
        case "S": // 아래로 이동
            isExistX = xs.find(([y, x]) => x === posX && y > posY && (posY + move) >= y);
            isOverflow = posY + move > park.length - 1;

            if(!isExistX && !isOverflow) posY += move;
            break;
        case "W": // 좌로 이동
            isExistX = xs.find(([y, x]) => y === posY && x < posX && (posX - move) <= x);
            isOverflow = posX - move < 0;

            if(!isExistX && !isOverflow) posX -= move;
            break;
        case "E": // 우로 이동
            isExistX = xs.find(([y, x]) => y === posY && x > posX && (posX + move) >= x);
            isOverflow = posX + move > park[0].length - 1;

            if(!isExistX && !isOverflow) posX += move;
            break;
        }
    }
    
    return [posY, posX];
}