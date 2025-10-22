const solution = (genres, plays) => {
    const answer = [];
    const obj = {};
    
    genres.forEach((genre, i) => {
        const key = genre;
        const play = plays[i];
        
        if(!obj[key]) obj[key] = { totalPlays: 0, songs: [] };
        
        obj[key].totalPlays += play;
        obj[key].songs.push([i, play]);
    })
    
    // 장르별 총재생 수 기준 내림차순 정렬
    const values = Object.values(obj).sort((a, b) => b.totalPlays - a.totalPlays);
    
    for(const object of values) {
        const arr = object.songs;
        
        // 1. 재생수 기준 내림차순 정렬
        // 2. 고유 번호 기준 오름차순 정렬
        arr.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
        arr.slice(0, 2).forEach(([index, _]) => answer.push(index));
    }
    
    return answer;
}
