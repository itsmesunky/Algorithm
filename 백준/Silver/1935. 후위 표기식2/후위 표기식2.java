import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Stack;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		// 피연산자의 개수
		int N = Integer.parseInt(br.readLine());
		
		// 후위식
		String prefix = br.readLine();
		
		// 피연산자 배열
		double[] arr = new double[N];
		
		// 원소 초기화
		for(int i = 0; i < N; i++) {
			arr[i] = Double.parseDouble(br.readLine());
		}
		
		// Stack 객체 생성
		Stack<Double> stack = new Stack<>();
		
		for(char ch : prefix.toCharArray()) {
			// 피연산자일 경우, stack에 값을 치환해서 push
			if(Character.isAlphabetic(ch)) {
				stack.push(arr[ch - 'A']);
			} else {
				double rt = stack.pop(), lt = stack.pop();
				switch(ch) {
				case '+' :
					stack.push(lt+rt);
					break;
				case '-' :
					stack.push(lt-rt);
					break;
				case '*' :
					stack.push(lt*rt);
					break;
				case '/' :
					stack.push(lt/rt);
					break;
				}
			}
		}
		System.out.printf("%.2f", stack.peek());
	}
}
