import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		// 명령의 수
		int N = Integer.parseInt(br.readLine());
		
		// Stack 객체 생성
		Stack<Integer> stack = new Stack<Integer>();
		
		for(int i = 0; i < N; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			if(st.countTokens() > 1) {
				if(st.nextToken().equals("1")) {
					stack.push(Integer.parseInt(st.nextToken()));
				}
			} else {
				switch (st.nextToken()) {
				case "2":
					if(stack.isEmpty()) {
						bw.write("-1");
						bw.newLine();
					} else {
						bw.write(String.valueOf(stack.peek()));
						bw.newLine();
						stack.pop();
					}
					break;
				case "3":
					bw.write(String.valueOf(stack.size()));
					bw.newLine();
					break;
				case "4":
					if(stack.isEmpty()) {
						bw.write("1");
						bw.newLine();
					} else {
						bw.write("0");
						bw.newLine();
					}
					break;
				case "5":
					if(stack.isEmpty()) {
						bw.write("-1");
						bw.newLine();
					} else {
						bw.write(String.valueOf(stack.peek()));
						bw.newLine();
					}
					break;
				default:
					break;
				}
			}
		}
		bw.flush();
		bw.close();
	}
}
