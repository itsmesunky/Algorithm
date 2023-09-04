import java.util.*;

class Solution {
    public long solution(long n) {
        char[] chArr = String.valueOf(n).toCharArray();
        Arrays.sort(chArr);
        String str = "";
        for(int i = chArr.length - 1; i >= 0; i--) {
            str += chArr[i];
        }
        long answer = Long.valueOf(str);
        return answer;
    }
}