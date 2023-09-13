import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int M = Integer.parseInt(br.readLine());
		int N = Integer.parseInt(br.readLine());
		
		int[] arr = new int[N+1];
		
		int sum = 0;
		int min = Integer.MAX_VALUE;
		
		for(int i =2; i <= N; i++) {
			if(arr[i] == 0) {
				if(M <= i) {
					sum += i;
					min = Math.min(min, i);
				}
				for(int j = i; j <= N; j = j+i) {
					arr[j] = 1;
				}
			}
		}
		
		if(sum == 0) {
			System.out.print("-1");
		} else {
			System.out.println(sum);
			System.out.println(min);
		}
		
	}
}
