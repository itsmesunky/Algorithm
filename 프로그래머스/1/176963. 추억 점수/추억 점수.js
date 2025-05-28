const solution = (name, yearning, photo) => {
    const obj = Object.fromEntries(name.map((v, i) => [v, yearning[i]]));
    return photo.map(arr => arr.reduce((acc, cur) => acc += obj[cur] || 0, 0));
}