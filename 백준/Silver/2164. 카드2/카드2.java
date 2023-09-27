import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;

public class Main {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		// N장의 카드 Queue
		int N = Integer.parseInt(br.readLine());
		Queue<Integer> Q = new LinkedList<Integer>();
		for(int i = 1; i <= N; i++) {
			Q.offer(i);
		}
		
		while(Q.size() != 1) {
			// 맨 위의 카드 버리기
			Q.poll();
			// 버리고 남은 카드 중, 맨 위의 카드 맨 아래로
			Q.offer(Q.poll());
		}
		
		bw.write(String.valueOf(Q.peek()));
		bw.flush();
		bw.close();
	}

}
