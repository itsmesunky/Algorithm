const solution = (brown, yellow) => {
    const totalGrid = brown + yellow;
    
    let height = totalGrid;
    
    for(let i = 1; i <= totalGrid; i++) {
        for(let j = height; j >= 1; j--) {
            if(i * j === totalGrid) {
                height = j;
                
                if(i >= j && ((i * 2) + (j * 2) - 4 === brown)) {
                    return [i, j];
                }
                
                break;
            }
        }
    }
}