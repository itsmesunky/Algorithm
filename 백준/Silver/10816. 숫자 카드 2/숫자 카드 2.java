import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.HashMap;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception{
		// TODO Auto-generated method stub
		HashMap<Integer, Integer> map = new HashMap<>();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		// 가지고 있는 숫자 카드의 개수
		int N = Integer.parseInt(br.readLine());
		
		// 가지고 있는 숫자 카드 배열
		int[] arr = new int[N];

		StringTokenizer st = new StringTokenizer(br.readLine());
		// 배열에 원소 입력
		for(int i = 0; i < N; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		
		// map에 key, value mapping
		for(int i : arr) {
			map.put(i, map.getOrDefault(i, 0)+1);
		}
		
		// 각각 몇개 가지고 있는지 구해야 할 카드의 수
		int M = Integer.parseInt(br.readLine());
		int[] arr2 = new int[M];
		st = new StringTokenizer(br.readLine());
		for(int i = 0; i < M; i++) {
			arr2[i] = Integer.parseInt(st.nextToken());
		}
		
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		// 각 카드를 가지고 있는 개수 출력
		for(int i : arr2) {
			bw.write(map.getOrDefault(i, 0) + " ");
		}
		
		bw.flush();
		bw.close();
		
	}
}
