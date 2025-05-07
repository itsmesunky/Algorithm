const solution = (str_list) => {
    const strList = str_list.join('');
    
    let lIdx = strList.indexOf('l');
    let rIdx = strList.indexOf('r');
    
    // 'l', 'r' 둘 다 없는 경우
    if(lIdx === -1 && rIdx === -1) {
        return [];
    }
    
    // 'l'과 'r' 둘 다 있고, 'l'이 'r'보다 먼저 나오는 경우
    if((lIdx !== -1 && rIdx !== -1) && lIdx < rIdx) {
        return str_list.slice(0, lIdx);
    }
    
    // 'l'만 있는 경우
    if(rIdx === -1) {
        return str_list.slice(0, lIdx);
    }
    
    // 'r'이 'l'보다 먼저 나오는 경우
    if(lIdx !== -1 && rIdx < lIdx) {
        return str_list.slice(rIdx + 1, str_list.length);
    }
    
    // 'r'만 있는 경우
    if(lIdx === -1) {
        return str_list.slice(rIdx + 1, str_list.length);
    }
}