class Solution {
    public long solution(int a, int b) {
        long answer = 0;
        if(a < b) {
            while(a <= b) {
                answer += a;
                a++;
            }
        } else if(a == b) {
            answer = a;
        } else {
            while(b <= a) {
                answer += a;
                a--;
            }
        }
        
        return answer;
        
    }
}