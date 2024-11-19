function formatDate(date) {
    return date.map((value, index) => 
        String(value).padStart(index === 0 ? 4 : 2, "0")
    ).join('');
}

function solution(date1, date2) {
    return formatDate(date1) < formatDate(date2) ? 1 : 0;
}