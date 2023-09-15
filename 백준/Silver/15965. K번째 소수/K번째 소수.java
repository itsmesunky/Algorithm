import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		// K 입력받기
		int K = Integer.parseInt(br.readLine());
		
		// 소수들을 담을 list
		List<Integer> list = new ArrayList<Integer>();
		
		int[] arr = new int[10000001];
		
		for(int i = 2; i <= 10000000; i++) {
			if(arr[i] == 0) {
				list.add(i);
				for(int j = i; j <= 10000000; j = j + i) {
					arr[j] = 1;
				}
			}
		}
		System.out.println(list.get(K-1));
		
	}
}
