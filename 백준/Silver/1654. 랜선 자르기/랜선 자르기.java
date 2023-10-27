import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception {
		// 랜선 자르기(결정 알고리즘)
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		// 가지고 있는 랜선의 개수
		int K = Integer.parseInt(st.nextToken());
		// 필요한 랜선의 개수
		int N = Integer.parseInt(st.nextToken());
		
		long[] arr = new long[K];
		for(int i = 0; i < K; i++) {
			arr[i] = Long.parseLong(br.readLine());
		}
		
		// 최소값
		long lt = 1;
		// 최대값
		long rt = Arrays.stream(arr).max().getAsLong();
		long answer = 0;
		while(lt <= rt) {
			long mid = (lt+rt) / 2;
			if(count(arr, mid) >= N) {
				answer = mid;
				lt = mid + 1;
			} else {
				rt = mid - 1;
			}
		}
		
		bw.write(String.valueOf(answer));
		bw.flush();
		bw.close();
	}
	
	// 특정 길이로 잘랐을 때, 얻을 수 있는 랜선의 개수 구하는 메소드
	static long count(long[] arr, long length) {
		long sum = 0;
		for(long i : arr) {
			sum += i / length;
		}
		return sum;
	}
}