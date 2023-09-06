import java.util.Scanner;

public class Main {

	public static void main(String[] args) throws Exception{
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int[][] arr = new int[N+1][6];
		for(int i = 1; i <= N; i++) {
			for(int j = 1; j < 6; j++) {
				arr[i][j] = sc.nextInt();
			}
		}
		int answer = 0, count = 0, max = Integer.MIN_VALUE;
		for(int i = 1; i <= N; i++) {
			for(int j = 1; j <= N; j++) {
				for(int k = 1; k < 6; k++) {
					if(arr[i][k] == arr[j][k]) {
						count++;
						break;
					}
				}
			}
			if(max < count) {
				max = count;
				answer = i;
			}
			count = 0;
		}
		
		System.out.print(answer);
	}
}
