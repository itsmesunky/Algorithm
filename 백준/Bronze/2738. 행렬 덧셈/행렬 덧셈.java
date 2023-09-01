import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		// 두 정수 N, M 입력 받기
		int N = sc.nextInt();
		int M = sc.nextInt();
		
		// 두 행렬 만들기
		int[][] arr1 = new int[N][M];
		int[][] arr2 = new int[N][M];
		
		// 원소값 입력 받아서 각 행렬에 채우기
		for(int i = 0; i < N; i++) {
			for(int j = 0; j < M; j++) {
				arr1[i][j] = sc.nextInt();
			}
		}
		
		for(int i = 0; i < N; i++) {
			for(int j = 0; j < M; j++) {
				arr2[i][j] = sc.nextInt();
			}
		}
		
		// 두 행렬의 합을 담을 새로운 행렬
		int[][] answer = new int[N][M];
		
		// 두 행렬의 합 구하기
		for(int i =0; i < N; i++) {
			for(int j = 0; j < M; j++) {
				answer[i][j] = arr1[i][j] + arr2[i][j];
			}
		}
		
		// 출력하기
		for(int i = 0; i < N; i++) {
			for(int j = 0; j < M; j++) {
				System.out.print(answer[i][j] + " ");
			}
			System.out.println();
		}
		
	}

}
