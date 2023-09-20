class Solution {
    public String solution(String s) {
        // 전체 소문자로 변환 후, 공백을 기준으로 String 배열 생성
        String[] strArr = s.toLowerCase().split(" ");
        
        if(s.substring(s.length() - 1, s.length()).equals(" ")) {
	        strArr[strArr.length-1] += " ";
	    }
        
		String answer = "";
        
		for(int i = 0; i < strArr.length; i++) {
			for(int j = 0; j < strArr[i].length(); j++) {
                // 첫 글자가 영문일 경우 대문자로 변환
				if(j == 0 && Character.isAlphabetic(strArr[i].charAt(j))) {
					answer += Character.toUpperCase(strArr[i].charAt(j));
				} else {
					answer += strArr[i].charAt(j);
				}
			}
			if(i != strArr.length -1) {
				answer += " ";
			}
		}
		return answer;
    }
}