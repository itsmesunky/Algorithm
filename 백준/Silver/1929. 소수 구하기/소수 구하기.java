import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int M = sc.nextInt();
		int N = sc.nextInt();
		
		int[] iArr = new int[N+1];
		
		for(int i = 2; i <= N; i++) {
			if(iArr[i] == 0) {
				if(M <= i) {
					System.out.println(i);
				}
				for(int j = i; j <= N; j = j + i) {
					iArr[j] = 1;
				}
			}
		}
	}
}