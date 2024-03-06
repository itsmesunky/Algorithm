import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());
        
        Stack<Character> stack = new Stack<Character>();
        
        int answer = 0;
        
        while(A > 1 && B > 0) {
            stack.push('A');
            A--;
            
            stack.push('B');
            B--;
            
            if(A > 0) {
                stack.push('A');
                A--;
                answer++;
            }
        }
        
        System.out.println(answer);
    }
}
