const solution = (n, l, r) => {
    // 1-based 인덱스를 0-based 인덱스로 변환
    const start = l - 1;
    const end = r - 1;

    const getOneCount = (level, currentStart, currentEnd) => {
        if (level === 0) {
            return 1;
        }

        const len = currentEnd - currentStart + 1n;
        const segmentLen = len / 5n;

        let count = 0;
        
        for (let i = 0; i < 5; i++) {
            if (i === 2) continue;

            const nextStart = currentStart + segmentLen * BigInt(i);
            const nextEnd = nextStart + segmentLen - 1n;

            if (nextEnd < start || nextStart > end) {
                continue;
            }

            if (nextStart >= start && nextEnd <= end) {
                count += Math.pow(4, level - 1);
                continue;
            }
            
            count += getOneCount(
                level - 1,
                nextStart,
                nextEnd,
            );
        }

        return count;
    };

    return getOneCount(n, 0n, 5n ** BigInt(n) - 1n);
};