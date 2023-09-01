class Solution {
    public int solution(int n) {
        int[] iArr = new int[n+1];
        int count = 0;
        for(int i = 2; i <= n; i++) {
            if(iArr[i] == 0) {
                count++;
                for(int j = i; j <= n; j = j+i) {
                    iArr[j] = 1;
                }
            }
        }
        return count;
    }
}