const addMonth = (date, strNum) => {
    let [year, month, day] = date.split(".").map((v, i) => i === 2 ? v : +v);
    let num = parseInt(strNum);
    
    year += Math.floor(num / 12);
    month += num % 12;
    
    if(month > 12) {
        year += Math.floor(month / 12);
        month %= 12;
    }
    
    return `${year}.${month.toString().padStart(2, '0')}.${day}`;
}

const solution = (today, terms, privacies) => {
    const answer = [];
    
    privacies.forEach((privacy, i) => {
        const [date, char] = privacy.split(" ");
        const period = terms.filter(term => term.split(" ")[0] === char)[0]
                            .split(" ")[1];
        
        if(addMonth(date, period) <= today) {
            answer.push(i + 1);
        }
    })
    
    return answer;
}