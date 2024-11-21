function solution(myString, pat) {
    return myString.substring(0, myString.lastIndexOf(pat)) + pat;
}