const solution = (spell, dic) => {
    for(const str of dic) {
        if(spell.sort().join('') === str.split('').sort().join('')) {
            return 1;
        }
    }
    
    return 2;
}