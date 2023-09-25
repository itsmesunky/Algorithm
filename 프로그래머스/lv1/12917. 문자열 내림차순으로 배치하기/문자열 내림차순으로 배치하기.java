import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {
    public String solution(String s) {
        StringBuilder sb = new StringBuilder();
		
		// 소문자 List
		List<Character> lowerCaseList = new ArrayList<Character>();
		// 대문자 List
		List<Character> upperCaseList = new ArrayList<Character>();
		
		for(char ch : s.toCharArray()) {
			if(Character.isLowerCase(ch)) {
				lowerCaseList.add(ch);
			} else {
				upperCaseList.add(ch);
			}
		}
		
		// 소문자 List 내림차순 정렬
		lowerCaseList.sort(Collections.reverseOrder());
		// 대문자 List 내림차순 정렬
		upperCaseList.sort(Collections.reverseOrder());
		
		for(char ch : lowerCaseList) {
			sb.append(ch);
		}
		
		for(char ch : upperCaseList) {
			sb.append(ch);
		}
		
		return sb.toString();
    }
}