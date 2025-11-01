const solution = (s) => {
    const len = s.length;
    if (len < 2) return len;

    let maxLen = 1;

    const expand = (lt, rt) => {
        while (lt >= 0 && rt < len && s[lt] === s[rt]) {
            maxLen = Math.max(maxLen, rt - lt + 1);
            lt--;
            rt++;
        }
    };

    for (let i = 0; i < len; i++) {
        expand(i, i); 
        expand(i, i + 1);
    }

    return maxLen;
};