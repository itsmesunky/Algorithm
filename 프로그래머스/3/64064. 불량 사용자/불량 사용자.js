const solution = (user_id, banned_id) => {
    const isMatch = (user, banned) => {
        if (user.length !== banned.length) {
            return false;
        }
        for (let i = 0; i < user.length; i++) {
            if (banned[i] === '*') continue;
            if (user[i] !== banned[i]) {
                return false;
            }
        }
        return true;
    };

    const matches = banned_id.map(banned => {
        const matchingUsers = [];
        for (let i = 0; i < user_id.length; i++) {
            if (isMatch(user_id[i], banned)) {
                matchingUsers.push(i);
            }
        }
        return matchingUsers;
    });

    const uniqueCombinations = new Set();
    const banLen = banned_id.length;

    const dfs = (banIdx, currentMask) => {
        if (banIdx === banLen) {
            uniqueCombinations.add(currentMask);
            return;
        }

        for (const userIdx of matches[banIdx]) {
            if ((currentMask & (1 << userIdx)) === 0) {
                dfs(banIdx + 1, currentMask | (1 << userIdx));
            }
        }
    };

    dfs(0, 0);

    return uniqueCombinations.size;
};