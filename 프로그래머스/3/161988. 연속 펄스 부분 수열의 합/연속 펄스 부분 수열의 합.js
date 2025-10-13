function solution(sequence) {
    const N = sequence.length;
    
    const arr1 = []; 
    const arr2 = [];

    for (let i = 0; i < N; i++) {
        const sign1 = (i % 2 === 0) ? 1 : -1;
        
        arr1.push(sequence[i] * sign1);
        arr2.push(sequence[i] * (-sign1));
    }

    const findMaxSubarraySum = (arr) => {
        let currentMax = 0;
        let overallMax = -Infinity;

        for (const num of arr) {
            currentMax = Math.max(num, currentMax + num);
            overallMax = Math.max(overallMax, currentMax);
        }
        
        return overallMax;
    };
    
    const max1 = findMaxSubarraySum(arr1);
    const max2 = findMaxSubarraySum(arr2);

    return Math.max(max1, max2);
}