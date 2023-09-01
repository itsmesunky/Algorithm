import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		boolean[] bArr= new boolean[1000001];
		
		// 0과 1은 소수가 아니므로 true
		bArr[0] = bArr[1] = true;
		
		// 미리 1부터 1,000,000 까지 숫자 중 소수인 숫자 판별
		for(int i = 2; i <= 1000000; i++) {
			// 소수이면 false
			if(!bArr[i]) {
				// 그 소수의 배수값들은 모두 소수가 아니므로 true로 초기화 
				for(int j = i + i; j <= 1000000; j = j + i) {
					bArr[j] = true;
				}
			}
		}
		
		// 테스트 케이스
		int TC = sc.nextInt();
		int[] iArr = new int[TC];
		
		for(int i = 0; i < iArr.length; i++) {
			iArr[i] = sc.nextInt();
		}

		int count = 0;
		for(int i = 0; i < iArr.length; i++) {
			for(int j = 2; j <= iArr[i] / 2; j++) {
				if(!bArr[j] && !bArr[iArr[i] - j]) {
					count++;
				}
			}
			System.out.println(count);
			count = 0;
		}
	}

}
