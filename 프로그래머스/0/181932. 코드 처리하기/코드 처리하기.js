const solution = (code) => {
    let ret = "";
    let mode = false;
    
    for(let i = 0; i < code.length; i++) {
        switch(code[i]) {
            case "1":
                mode = !mode;
                break;
            default:
                if(mode) {
                    if(i % 2 !== 0) {
                        ret += code[i];
                    }
                } else {
                    if(i % 2 === 0) {
                        ret += code[i];
                    }
                }
                break;
        }
    }
    
    return ret.length === 0 ? "EMPTY" : ret;
    
}