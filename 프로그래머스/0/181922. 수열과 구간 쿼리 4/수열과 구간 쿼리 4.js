function solution(arr, queries) {
    for(const query of queries) {
        for(let i = query[0]; i <= query[1]; i++) {
            if(i % query[query.length - 1] === 0) {
                arr[i] += 1;
            }
        }
    }
    
    return arr;
}