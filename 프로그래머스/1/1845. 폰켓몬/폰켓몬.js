const solution = (nums) => {
    const takeCount = nums.length / 2;
    const setLength = [...new Set(nums)].length;
    
    return setLength < takeCount ? setLength : takeCount;
}
