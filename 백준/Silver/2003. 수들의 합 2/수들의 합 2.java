import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		
		st = new StringTokenizer(br.readLine());
		
		int[] arr = new int[N];
		for(int i = 0; i < arr.length; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		
		int lt = 0, count = 0, sum = 0;
		
		for(int rt = 0; rt < N; rt++) {
			sum += arr[rt];
			if(sum == M) {
				count++;
			}
			while(M <= sum) {
				sum -= arr[lt++];
				if(sum == M) {
					count++;
				}
			}
		}
		System.out.print(count);
	}
}
