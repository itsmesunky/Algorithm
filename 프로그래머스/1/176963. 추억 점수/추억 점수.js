const solution = (name, yearning, photo) => {
    const obj = {};
    
    name.forEach((v, i) => obj[v] = yearning[i]);
    
    return photo.map(arr => arr.reduce((acc, cur) => acc += obj[cur] || 0, 0));
}