import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;
 
public class Main {
 
	public static void main(String[] args) throws IOException {
		BufferedReader br  = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		// 문자열 입력받기
		String str = br.readLine();
		
		// Stack 객체 생성
		Stack<Character> stack = new Stack<Character>();
		
		// 잘라진 갯수
		int answer = 0;
		
		for(int i = 0; i < str.length(); i++) {
			if(str.charAt(i) == '(') {
				stack.push(str.charAt(i));
			} else {
				if(str.charAt(i-1) == '(') {
					stack.pop();
					answer += stack.size();
				} else {
					stack.pop();
					answer++;
				}
			}
		}
		
		bw.write(String.valueOf(answer));
		bw.flush();
		bw.close();
		
	}
}