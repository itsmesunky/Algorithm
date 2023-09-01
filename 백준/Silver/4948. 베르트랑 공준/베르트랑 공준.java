import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		// 테스트 케이스에 입력된 숫자를 담을 list
		List<Integer> list = new ArrayList<Integer>();
		while(true) {
			int N = sc.nextInt();
			// 입력 받은 정수 N이 0이면 반복문 탈출
			if(N <= 0) {
				break;
			} else {
				list.add(N);
			}
		}
		
		for(int i = 0; i < list.size(); i++) {
			int[] arr = new int[(2 * list.get(i)) + 1];
			int count = 0;
			for(int j = 2; j < arr.length; j++) {
				if(arr[j] == 0) {
					if(j > list.get(i)) {
						count++;
					}
					for(int k = j; k < arr.length; k = k+j) {
						arr[k] = 1;
					}
				}
			}
			System.out.println(count);
		}

	}

}
