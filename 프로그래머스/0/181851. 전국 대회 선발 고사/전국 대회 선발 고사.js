const solution = (rank, attendance) => {
    let joinAvailRank = [];
    let i = 1;
    
    while(joinAvailRank.length < 3){
        if(attendance[rank.indexOf(i)]) {
            joinAvailRank.push(rank.indexOf(i));
        }
        i++;
    }
    
    let [a, b, c] = joinAvailRank;
    
    return (10000 * a) + (100 * b) + c; 
}