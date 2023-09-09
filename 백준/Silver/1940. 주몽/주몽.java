import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int[] arr = new int[Integer.parseInt(br.readLine())];
		int M = Integer.parseInt(br.readLine());
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		for(int i = 0; i < arr.length; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		
		int count = 0;
		
		for(int p1 = 0; p1 < arr.length-1; p1++) {
			for(int p2 = p1+1; p2 < arr.length; p2++) {
				if(arr[p1] + arr[p2] == M) {
					count++;
				}
			}
		}
		
		System.out.print(count);
	}
}