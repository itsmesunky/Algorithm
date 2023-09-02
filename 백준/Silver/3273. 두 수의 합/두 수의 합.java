import java.util.Arrays;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int[] arr = new int[n];
		for(int i = 0; i < n; i++) {
			arr[i] = sc.nextInt();
		}
		int x = sc.nextInt();
		Arrays.sort(arr);
		int p1 = 0, p2 = n -1;
		int count = 0;
		while(p1 < p2) {
			if(arr[p1] + arr[p2] == x) {
				count++;
				p1++;
				p2--;
			} else {
				if(arr[p1] + arr[p2] < x) {
					p1++;
				} else {
					p2--;
				}
			}
		}
		System.out.print(count);
	}
}