function solution(arr) {
    let list = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    
    if(list.includes(arr.length)) {
        return arr;
    } else {
        for(let i = 0; i < list.length - 1; i++) {
            if(list[i] < arr.length && arr.length < list[i+1]) {
                for(let j = arr.length; j < list[i+1]; j++) {
                    arr[j] = 0;
                }
            }
        }
    }
    
    return arr;
}