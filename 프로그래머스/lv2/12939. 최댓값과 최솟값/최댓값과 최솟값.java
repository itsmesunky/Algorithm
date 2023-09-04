import java.util.*;

class Solution {
    public String solution(String s) {
        String[] strArr = s.split(" ");
        int[] iArr = new int[strArr.length];
        for(int i = 0; i < strArr.length; i++) {
            iArr[i] = Integer.valueOf(strArr[i]);
        }
        Arrays.sort(iArr);
        return iArr[0] + " " + iArr[iArr.length-1];
    }
}