const solution = (new_id) => {
    const answer = new_id.toLowerCase()
                        .replaceAll(/[^a-z0-9\-_.]/g, '')
                        .replaceAll(/[\.]+/g, '.')
                        .replace(/^\.|\.$/g, '')
                        .padEnd(1, 'a')
                        .slice(0, 15)
                        .replace(/\.$/g, '');
    
    return answer.length <= 2 ? answer + answer.at(-1).repeat(3 - answer.length) : answer;
}