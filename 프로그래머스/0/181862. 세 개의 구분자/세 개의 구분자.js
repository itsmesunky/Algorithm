function solution(str) {
    const answer = str.split(/[abc]/).filter(item => item.length !== 0);
    return answer.length === 0 ? ["EMPTY"] : answer; 
}