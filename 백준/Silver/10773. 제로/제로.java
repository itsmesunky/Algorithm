import java.io.IOException;
import java.util.Scanner;
import java.util.Stack;

public class Main {

	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		int TC = sc.nextInt();
		Stack<Integer> stack = new Stack<Integer>();
		for(int i = 0;  i < TC; i++) {
			int num = sc.nextInt();
			if(!stack.isEmpty() && num == 0) {
				stack.pop();
			} else if(num > 0) {
				stack.push(num);
			}
		}
		int sum = 0;
		for(int i : stack) {
			sum += i;
		}
		System.out.print(sum);
	}
}
