const solution = (skill, skill_trees) => {
    let answer = 0;
    
    const regExp = new RegExp(`[^${skill}]`, 'g');
    
    for(const s of skill_trees) {
        const filtered = s.replaceAll(regExp, '');
        if(skill.startsWith(filtered)) {
            answer++;
        }
    }
    
    return answer;
}