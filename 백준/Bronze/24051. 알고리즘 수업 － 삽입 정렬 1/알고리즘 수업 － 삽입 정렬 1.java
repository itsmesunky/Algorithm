import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;
 
public class Main {
 
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		// 배열의 크기
		int N = Integer.parseInt(st.nextToken());
		int[] arr = new int[N];
		
		// 특정 숫자
		int K = Integer.parseInt(st.nextToken());

		st = new StringTokenizer(br.readLine());
		
		for(int i = 0; i < N; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		
		int count = 0;
		
		// 삽입 정렬
		for(int i = 1; i < N; i++) {
			int j;
			int tmp = arr[i];
			for(j = i - 1; j >= 0; j--) {
				if(tmp < arr[j]) {
					arr[j+1] = arr[j];
					count++;
					if(count == K) {
						bw.write(String.valueOf(arr[j+1]));
					}
				} else {
					break;
				}
			}
			if(arr[j+1] != tmp) {
				count++;
			}
			arr[j+1] = tmp;
		}
		
		if(count < K) {
			bw.write(String.valueOf(-1));
		}
		
		bw.flush();
		bw.close();
		
	}
}