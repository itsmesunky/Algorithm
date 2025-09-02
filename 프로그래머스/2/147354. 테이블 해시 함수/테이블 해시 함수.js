const solution = (data, col, row_begin, row_end) => {

    const sorted = [...data].sort((a, b) => {
        const [col1, col2] = [a[col - 1], b[col - 1]];

        if(col1 === col2) {
            return b[0] - a[0];
        }
        return col1 - col2;
    });

    for(let i = row_begin - 1; i < row_end; i++) {
        for(let j = 0; j < data[i].length; j++) {
            const value = sorted[i][j];
            sorted[i][j] = value % (i + 1);
        }
        
        const sum = sorted[i].reduce((acc, cur) => acc + cur, 0);
        
        sorted[i] = [];
        sorted[i].push(sum);
    }

    const sliced = sorted.slice(row_begin - 1, row_end).flat();

    while(sliced.length > 1) {
        sliced.splice(0, 2, sliced[0] ^ sliced[1]);
    }

    return sliced[0];
}