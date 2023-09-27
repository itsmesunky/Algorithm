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
		
		// 명령의 수
		int N = Integer.parseInt(br.readLine());
		
		// Queue 생성
		Queue<Integer> Q = new LinkedList<>();
		
		int last = 0;
		for(int i = 0; i < N; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			switch(st.nextToken()) {
			case "push" :
				last = Integer.parseInt(st.nextToken());
				Q.offer(last);
				break;
			case "front" :
				if(Q.isEmpty()) {
					bw.write("-1");
				} else {
					bw.write(String.valueOf(Q.peek()));
				}
				bw.newLine();
				break;
			case "back" :
				if(Q.isEmpty()) {
					bw.write("-1");
				} else {
					bw.write(String.valueOf(last));
				}
				bw.newLine();
				break;
			case "size" :
				bw.write(String.valueOf(Q.size()));
				bw.newLine();
				break;
			case "empty" :
				if(Q.isEmpty()) {
					bw.write("1");
				} else {
					bw.write("0");
				}
				bw.newLine();
				break;
			case "pop" :
				if(Q.isEmpty()) {
					bw.write("-1");
				} else {
					bw.write(String.valueOf(Q.poll()));
				}
				bw.newLine();
				break;
			}
		}
		bw.flush();
		bw.close();
	}
}