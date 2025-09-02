const solution = (data, col, row_begin, row_end) => {
    return [...data].sort((a, b) => a[col-1] - b[col-1] || b[0] - a[0])
                    .map((v, row) => v.reduce((acc, cur) => acc += (cur % (row + 1)), 0))
                    .slice(row_begin - 1, row_end)
                    .reduce((acc, cur) => acc ^= cur, 0);
}