const solution = (rank, attendance) => {
    let joinAvailRank = [];
    let i = 1;
    
    while(joinAvailRank.length < 3){
        let studentNumber = rank.indexOf(i);
        
        if(attendance[studentNumber]) {
            joinAvailRank.push(studentNumber);
        }
        i++;
    }
    
    let [a, b, c] = joinAvailRank;
    
    return (10000 * a) + (100 * b) + c; 
}