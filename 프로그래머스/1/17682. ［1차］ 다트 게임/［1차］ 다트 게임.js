const solution = (dartResult) => {
    const split = dartResult.match(/\d+[SDT][*#]?/g);
    const scores = [];
    
    split.forEach((str, i) => {
        const s = str.match(/\d/g).join('');
        const b = str.match(/[SDT]/g)[0];
        const o = str.match(/[*#]/g)?.[0] ?? '';
        
        switch(b) {
            case 'S':
                scores[i] = Math.pow(+s, 1);
                break;
            case 'D':
                scores[i] = Math.pow(+s, 2);
                break;
            case 'T':
                scores[i] = Math.pow(+s, 3);
                break;
                
        }
        
        if(o === '*') {
            scores[i] = scores[i] * 2;
            if(i !== 0) {
                scores[i-1] = scores[i-1] * 2;
            }
        } else if(o === '#') {
            scores[i] = scores[i] * -1;
        }
    })
    

    return scores.reduce((cur, acc) => cur += acc, 0)
}