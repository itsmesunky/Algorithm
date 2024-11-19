function solution(date1, date2) {
    for(let i = 0; i < date1.length; i++) {
        if(i === 0) {
            date1[i] = String(date1[i]).padStart(4, "0");    
        } else {
            date1[i] = String(date1[i]).padStart(2, "0");    
        }
    }
    
    for(let i = 0; i < date2.length; i++) {
        if(i === 0) {
            date2[i] = String(date2[i]).padStart(4, "0");    
        } else {
            date2[i] = String(date2[i]).padStart(2, "0");    
        }
    }
    
    if(date1.join('') < date2.join('')) {
        return 1;
    } else {
        return 0;
    }
}