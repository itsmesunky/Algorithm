import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception{
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int N = Integer.parseInt(st.nextToken()), M = Integer.parseInt(st.nextToken());
		
		HashMap<String, Integer> map = new HashMap<String, Integer>();
		
		// 듣도 못한 사람
		for(int i = 0; i < N; i++) {
			String key = br.readLine();
			map.put(key, map.getOrDefault(key, 0)+1);
		}
		
		// 보도 못한 사람
		for(int i = 0; i < M; i++) {
			String key = br.readLine();
			map.put(key, map.getOrDefault(key, 0)+1);
		}
		
		List<String> list = new ArrayList<>();
		
		for(String key : map.keySet()) {
			if(map.get(key) == 2) {
				list.add(key);
			}
		}
		
		// 정렬
		Collections.sort(list);
		
		// 듣도 보도 못한 사람 수
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		bw.write(String.valueOf(list.size()));
		bw.newLine();
		
		// 듣도 보도 못한 사람
		for(String name : list) {
			bw.write(name);
			bw.newLine();
		}
		
		bw.flush();
		bw.close();
		
	}

}
