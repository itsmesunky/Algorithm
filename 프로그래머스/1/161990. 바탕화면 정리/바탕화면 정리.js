const solution = (wallpaper) => {
    const obj = {
        lux: Number.MAX_VALUE,
        luy: Number.MAX_VALUE,
        rdx: Number.MIN_VALUE,
        rdy: Number.MIN_VALUE
    }
    
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#') {
                obj.lux = Math.min(i, obj.lux);
                obj.luy = Math.min(j, obj.luy);
                obj.rdx = Math.max(i + 1, obj.rdx);
                obj.rdy = Math.max(j + 1, obj.rdy);
            }
        }
    }
    
    return Object.values(obj);
}