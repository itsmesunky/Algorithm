import java.util.*;

class Solution {
    boolean solution(String str) {
        Stack<Character> stack = new Stack<Character>();
		for(char c : str.toCharArray()) {
			if(c == '(') {
				stack.push(c);
			} else {
				if(stack.isEmpty()) {
					return false;
				} else {
					stack.pop();
				}
			}
		}
		if(!stack.isEmpty()) {
			return false;
		} else {
			return true;
		}
    }
}