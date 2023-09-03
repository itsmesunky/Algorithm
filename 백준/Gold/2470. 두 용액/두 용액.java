import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		int[] arr = new int[n];
		StringTokenizer st = new StringTokenizer(br.readLine());
		for (int i = 0; i < n; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		
		Arrays.sort(arr);
		
		if(arr[0] >= 0) {
			System.out.println(arr[0] + " " +arr[1]);
		} else {
			int min = Integer.MAX_VALUE;
			int p1 = 0, p2 = n -1, num1 = 0, num2 = 0, sum = 0, tmp =0;
			while(p1 < p2) {
				sum = arr[p1] + arr[p2];
				if(sum == 0) {
					System.out.println(arr[p1] + " " + arr[p2]);
					break;
				} else {
					tmp = Math.abs(sum);
					if(tmp < min) {
						min = tmp;
						num1 = arr[p1];
						num2 = arr[p2];
					}
					if(sum < 0) {
						p1++;
					} else {
						p2--;
					}
				}
			}
			System.out.println(num1 + " " + num2);
		}
	}
}