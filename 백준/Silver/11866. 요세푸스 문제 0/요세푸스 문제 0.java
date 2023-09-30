import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;
 
public class Main {
 
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		// N
		int N = Integer.parseInt(st.nextToken());
		// K
		int K = Integer.parseInt(st.nextToken());
		
		// Queue 생성
		Queue<Integer> Q = new LinkedList<Integer>();
		for(int i = 0; i < N; i++) {
			Q.offer(i+1);
		}
		
		int i = 1;
		List<Integer> list = new ArrayList<Integer>();
		while(!Q.isEmpty()) {
			if(i%K!=0) {
				Q.offer(Q.poll());
			} else {
				list.add(Q.poll());
			}
			i++;
		}
		
		bw.write("<");
		
		for(int j = 0; j < list.size(); j++) {
			if(j == list.size()-1) {
				bw.write(String.valueOf(list.get(j) + ">"));
			} else {
				bw.write(String.valueOf(list.get(j) + ", "));
			}
		}
		
		bw.flush();
		bw.close();
		
	}
}