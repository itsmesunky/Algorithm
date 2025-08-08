const separateString = (originalText) => {
    /**
    * 첫 번째 그룹(Head): 영문 대소문자, 공백, 마침표, 빼기 부호
    * 두 번째 그룹(Number): 숫자 1자리부터 5자리까지
    * 세 번째 그룹(Tail): 모든 문자
    */
    const regExp = /^([a-zA-Z-. ]+)(\d{1,5})(.*)/
    const [_, head, number, tail] = originalText.match(regExp);
    
    return { originalText, head, number, tail }
}

const solution = (files) => {
    return files.map(file => separateString(file))
                .sort((a, b) => {
                    const [headA, headB] = [a.head.toLowerCase(), b.head.toLowerCase()];
        
                    return headA === headB ? +a.number - +b.number : headA.localeCompare(headB);
                })
                .map(file => file.originalText);
};