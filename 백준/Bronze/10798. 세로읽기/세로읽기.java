import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		// 5행 15열의 2차원 배열 생성
		String[][] arr = new String[5][15];
		
		// 2차원 배열의 모든 원소값을 ""로 초기화
		for(int i = 0 ; i < 5; i++) {
			for(int j = 0; j < 15; j++) {
				arr[i][j] = "";
			}
		}
		
		// 문자열을 입력 받아서 문자를 2차원 배열의 원소값으로 저장
		for(int i = 0; i < 5; i++) {
			String str = sc.next();
			for(int j = 0; j < str.length(); j++) {
				arr[i][j] = String.valueOf(str.charAt(j));
			}
		}
		
		String answer = "";
		
		// answer에 2차원 배열 원소값 더하기
		for(int i = 0; i < arr[0].length; i++) {
			for(int j = 0; j < 5; j++) {
				answer += arr[j][i];
			}
		}
		System.out.println(answer);
	}

}
