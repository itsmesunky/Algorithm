import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int[] arr = new int[Integer.parseInt(br.readLine())];
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		for(int i = 0; i < arr.length; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		
		int p1 = 0, p2 = arr.length - 1, i = 0, j = 0, sum = 0, min = Integer.MAX_VALUE;
		
		while(p1 != p2) {
			sum = arr[p1] + arr[p2];
			min = Math.min(Math.abs(sum), min);
			if(Math.abs(sum) <= min) {
				i = arr[p1];
				j = arr[p2];
			}
			if(0 < sum) {
				p2--;
			} else if(sum < 0) {
				p1++;
			} else if(sum == 0) {
				i = arr[p1];
				j = arr[p2];
				break;
			}
		}
		
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		bw.write(i + " " + j);
		bw.flush();
		bw.close();
	}
}