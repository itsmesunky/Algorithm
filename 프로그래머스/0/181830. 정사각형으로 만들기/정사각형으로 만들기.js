const solution = (arr) => {
    const rows = arr.length;
    const columns = arr[0].length
    
    if(rows < columns) {
        for(let i = rows; i < columns; i++) {
            let newArr = Array.from({length: columns}).fill(0);
            
            arr.push(newArr);
        }
    }
    
    if(columns < rows) {
        for(const row of arr) {
            for(let i = 0; i < rows - columns; i++) {
                row.push(0);
            }
        }
    }
    
    return arr;
}