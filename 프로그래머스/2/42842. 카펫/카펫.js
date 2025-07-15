const solution = (brown, yellow) => {
    // 카펫의 크기는 brown 격자 개수 + yellow 격자 개수
    const totalGrid = brown + yellow;

    // 카펫 안에 노란색 영역이 있기 위해서는 카펫의 최소 높이가 3이 돼야 함
    for(let height = 3; height <= Math.sqrt(totalGrid); height++) {
        const width = totalGrid / height;
        
        if(Number.isInteger(width)) {
            const inner = (width - 2) * (height - 2);
            
            if(inner === yellow) {
                return [width, height];
            }
        }
    }
};
