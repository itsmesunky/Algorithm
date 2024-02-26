class Solution {
    public int[] solution(String str) {
        int length = str.length();
        int[] arr = new int[length];
        arr[0] = -1;
        
        for(int i = 1; i < length; i++) {
            for(int j = 0; j < i; j++) {
                if(str.charAt(i) == str.charAt(j)) {
                    arr[i] = i-j;
                } else {
                    if(arr[i] == 0) {
                        arr[i] = -1;
                    }
                }
            }
        }
        return arr;
    }
}