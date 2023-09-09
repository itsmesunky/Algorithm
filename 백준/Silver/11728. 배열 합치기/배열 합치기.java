import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		
		int[] A = new int[N];
		int[] B = new int[M];
		
		 st = new StringTokenizer(br.readLine());
		
		for(int i = 0; i < N;  i++) {
			A[i] = Integer.parseInt(st.nextToken());
		}
		
		st = new StringTokenizer(br.readLine());
		
		for(int i = 0; i < M; i++) {
			B[i] = Integer.parseInt(st.nextToken());
		}
		
		List<Integer> list = new ArrayList<>();
		
		int p1 = 0, p2 = 0;
		
		while(p1 < N && p2 < M) {
			if(A[p1] < B[p2]) {
				list.add(A[p1++]);
			} else {
				list.add(B[p2++]);
			}
		}
		
		while(p1 < N) {
			list.add(A[p1++]);
		}
		
		while(p2 < M) {
			list.add(B[p2++]);
		}
		
		Collections.sort(list);
		
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		for(int i : list) {
			bw.write(i + " ");
		}
		
		bw.flush();
		bw.close();
		
	}
}