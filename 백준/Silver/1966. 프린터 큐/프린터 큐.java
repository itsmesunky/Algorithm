import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;
 
public class Main {
 
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		// 테스트 케이스
		int TC = Integer.parseInt(br.readLine());
		
		for(int i = 0; i < TC; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			
			// 문서의 개수
			int N = Integer.parseInt(st.nextToken());
			// 궁금한 문서 인덱스
			int M = Integer.parseInt(st.nextToken());
			
			int[] arr = new int[N];
			
			st = new StringTokenizer(br.readLine());
			
			for(int j = 0; j < arr.length; j++) {
				arr[j] = Integer.parseInt(st.nextToken());
			}
			
			Queue<Doc> Q = new LinkedList<Doc>();
			for(int j = 0; j <arr.length; j++) {
				Q.offer(new Doc(j, arr[j]));
			}
			
			int answer = 0;
			
			while(!Q.isEmpty()) {
				Doc tmp = Q.poll();
				if(!Q.isEmpty()) {
					for(Doc doc : Q) {
						if(tmp.priority < doc.priority) {
							Q.offer(tmp);
							tmp = null;
							break;
						}
					}
				}
				if(tmp != null) {
					answer++;
					if(tmp.idx == M) {
						bw.write(String.valueOf(answer));
						bw.newLine();
					}
				}
			}
		}
		bw.flush();
		bw.close();
	}
}

class Doc {
	int idx; // 인덱스
	int priority; // 중요도
	
	public Doc(int idx, int priority) {
		this.idx = idx;
		this.priority = priority;
	}
}