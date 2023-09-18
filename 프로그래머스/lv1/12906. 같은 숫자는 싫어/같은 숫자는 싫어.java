import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        // Stack 객체 생성
        Stack<Integer> stack = new Stack<Integer>();
        
		for(int i : arr) {
			if(stack.isEmpty()) {
				stack.push(i);
			}else if(stack.peek() != i) {
				stack.push(i);
			}
		}
        
		int[] answer = new int[stack.size()];
        
		for(int i = 0; i < stack.size(); i++) {
			answer[i] = stack.get(i);
		}
        
		return answer;
    }
}