import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		// 명령의 수
		int N = Integer.parseInt(br.readLine());
		
		// Stack 객체 생성
		Stack<Integer> stack = new Stack<Integer>();
		
		for(int i = 0; i < N; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			if(st.countTokens() > 1) {
				st.nextToken();
				stack.push(Integer.parseInt(st.nextToken()));
			} else {
				switch (st.nextToken()) {
				case "pop":
					if(stack.isEmpty()) {
						System.out.println("-1");
					} else {
						System.out.println(stack.peek());
						stack.pop();
					}
					break;
				case "size":
					System.out.println(stack.size());
					break;
				case "empty":
					if(stack.isEmpty()) {
						System.out.println(1);
					} else {
						System.out.println(0);
					}
					break;
				case "top":
					if(stack.isEmpty()) {
						System.out.println(-1);
					} else {
						System.out.println(stack.peek());
					}
				default:
					break;
				}
			}
		}
		
	}
}
