class Solution {
    public int solution(int n) {
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = i+1;
        }
        int lt = 0, count = 0, sum = 0;
        for(int rt = 0; rt < n; rt++) {
            sum += arr[rt];
            if(sum == n) {
                count++;
            }
            while(n <= sum) {
                sum -= arr[lt++];
                if(sum == n) {
                    count++;
                }
            }
        }
        return count;
    }
}