import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		// N명의 사람과 Queue
		int N = Integer.parseInt(st.nextToken());
		Queue<Integer> Q = new LinkedList<Integer>();
		for(int i = 1; i <= N; i++) {
			Q.offer(i);
		}
		
		// 양의 정수 K
		int K = Integer.parseInt(st.nextToken());
		
		// 수열 List
		List<Integer> list = new ArrayList<Integer>();
		
		int count = 1;
		
		while(!Q.isEmpty()) {
			if(count % K != 0) {
				Q.offer(Q.poll());
			} else {
				list.add(Q.poll());
			}
			count++;
		}
		
		System.out.print("<");
		
		for(int i = 0; i < list.size(); i++) {
			System.out.print(list.get(i));
			if(i != list.size() - 1) {
				System.out.print(", ");
			}
		}
		
		System.out.print(">");
		
	}
}
