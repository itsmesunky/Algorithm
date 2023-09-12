import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		// 2부터 N까지의 정수
		int N = sc.nextInt();
		
		// P번째
		int P = sc.nextInt();

		// 정수가 지워질 때 마다 up 될 count
		int count = 0;
		
		// 배열 생성
		int[] arr = new int[N+1];
		
		loop1 : for(int i = 2; i <= N; i++) {
			for(int j = i; j <= N; j = j + i) {
				if(arr[j] == 0) {
					arr[j] = 1;
					count++;
					if(count == P) {
						System.out.print(j);
						break loop1;
					}
				}
			}
		}
	}
}
