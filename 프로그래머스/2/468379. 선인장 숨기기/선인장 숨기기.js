const solution = (m, n, h, w, drops) => {
    const prefix = new Int32Array((m + 1) * (n + 1));
    
    const check = (k) => {
        prefix.fill(0);
        
        for (let i = 0; i < k; i++) {
            const [r, c] = drops[i];
            prefix[(r + 1) * (n + 1) + (c + 1)] = 1;
        }
        
        for (let r = 1; r <= m; r++) {
            for (let c = 1; c <= n; c++) {
                prefix[r * (n + 1) + c] +=
                    prefix[(r - 1) * (n + 1) + c] +
                    prefix[r * (n + 1) + (c - 1)] -
                    prefix[(r - 1) * (n + 1) + (c - 1)];
            }
        }
        
        for (let r = 0; r <= m - h; r++) {
            for (let c = 0; c <= n - w; c++) {
                const r1 = r, c1 = c;
                const r2 = r + h, c2 = c + w;
                
                const sum = prefix[r2 * (n + 1) + c2]
                          - prefix[r1 * (n + 1) + c2]
                          - prefix[r2 * (n + 1) + c1]
                          + prefix[r1 * (n + 1) + c1];
                          
                if (sum === 0) {
                    return [r, c];
                }
            }
        }
        return null;
    };

    let low = 0;
    let high = drops.length;
    let bestR = 0;
    let bestC = 0;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const result = check(mid);
        
        if (result) {
            bestR = result[0];
            bestC = result[1];
            low = mid + 1; 
        } else {
            high = mid - 1; 
        }
    }

    return [bestR, bestC];
};