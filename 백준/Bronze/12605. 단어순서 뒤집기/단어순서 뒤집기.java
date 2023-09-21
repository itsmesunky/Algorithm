import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		// Test Case
		int N = Integer.parseInt(br.readLine());
		
		// Stack 객체 생성
		Stack<String> stack = new Stack<String>();
		
		for(int i = 0; i < N; i++) {
			String[] arr = br.readLine().split(" ");
			for(String str : arr) {
				stack.push(str);
			}
			bw.write("Case #" + String.valueOf(i+1) + ": ");
			while(!stack.isEmpty()) {
				String str = stack.pop() + " ";
				bw.write(str);
			}
			bw.newLine();
			stack.clear();
		}
		
		bw.flush();
		bw.close();
		
	}
}
