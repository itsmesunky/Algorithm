const solution = (people, limit) => {
    const arr = [...people].sort((a, b) => a - b);
    
    let answer = 0, i = 0, j = arr.length - 1;
    
    while(i <= j) {
        if(arr[i] + arr[j] <= limit) {
            i++;
        }
        j--;
        answer++;
    }
    
    return answer;
}