import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		// N
		int N = Integer.parseInt(br.readLine());
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		// 중복 제거 하기 위해서 Set 컬렉션 프레임워크
		HashSet<Integer> set = new HashSet<Integer>();
		for(int i = 0; i < N; i++) {
			set.add(Integer.parseInt(st.nextToken()));
		}
		
		ArrayList<Integer> list = new ArrayList<>(set);
		Collections.sort(list);
		
		for(int i : list) {
			bw.write(i + " ");
		}
		
		bw.flush();
		bw.close();
		
	}

}