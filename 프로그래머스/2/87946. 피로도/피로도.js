const solution = (k, dungeons) => {
    let max = 0;
    const visited = Array(dungeons.length).fill(false);

    const dfs = (currentK, count) => {
        max = Math.max(max, count);

        for(let i = 0; i < dungeons.length; i++) {
            const [require, consume] = dungeons[i];

            if(!visited[i] && currentK >= require) {
                visited[i] = true;
                dfs(currentK - consume, count + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);

    return max;
}