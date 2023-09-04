class Solution {
    public int solution(int[] absolutes, boolean[] signs) {
        int[] nArr = new int[absolutes.length];
        
        for(int i = 0; i < absolutes.length; i++) {
            if(signs[i] == false) {
                nArr[i] = absolutes[i] - absolutes[i] - absolutes[i];
            } else {
                nArr[i] = absolutes[i];
            }
        }
        
        int answer = 0;
        for(int i = 0; i < nArr.length; i++) {
            answer += nArr[i];
        }
        
        return answer;
    }
}