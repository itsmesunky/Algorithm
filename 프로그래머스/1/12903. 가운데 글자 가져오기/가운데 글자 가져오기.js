const solution = (s) => {
    const strLength = s.length;
    const center = strLength / 2;
    
    return strLength % 2 ? s.charAt(center) : s.charAt(center - 1) + s.charAt(center);
}