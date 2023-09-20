import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		while(true) {
			String str = br.readLine();
			// Stack 
			Stack<Character> stack = new Stack<Character>();
			if(str.equals(".")) {
				break;
			} else {
				String answer = "yes";
				for(char c : str.toCharArray()) {
					if(c == '(' || c == '[') {
						stack.push(c);
					} else if(c == ')') {
						if(stack.isEmpty() || stack.peek() != '(') {
							answer = "no";
							break;
						} else {
							stack.pop();
						}
					} else if(c == ']') {
						if(stack.isEmpty() || stack.peek() != '[') {
							answer = "no";
							break;
						} else {
							stack.pop();
						}
					}
				}
				
				if(answer.equals("no")) {
					System.out.println(answer);
				} else if(answer.equals("yes") && stack.isEmpty()) {
					System.out.println(answer);
				} else if(!stack.isEmpty()) {
					System.out.println("no");
				}
				
			}
		}
	}
}
