class Solution {
    public int solution(String s) {
        String[] strArr = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        
        for(int i = 0; i < strArr.length; i++) {
            if(s.contains(strArr[i])) {
                s = s.replaceAll(strArr[i], String.valueOf(i));
            }
        }
        
        int answer = Integer.parseInt(s);
        
        return answer;
    }
}