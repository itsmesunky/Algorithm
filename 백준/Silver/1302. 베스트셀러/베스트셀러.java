import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class Main {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		// 하루 동안 팔린 책의 개수
		int N = Integer.parseInt(br.readLine());
		
		HashMap<String, Integer> map = new HashMap<String, Integer>();
		
		for(int i = 0; i < N; i++) {
			String str = br.readLine();
			map.put(str, map.getOrDefault(str, 0)+1);
		}
		
		String answer = "";
		int max = Integer.MIN_VALUE;
		
		List<String> list = new ArrayList<String>(map.keySet());
		Collections.sort(list);
		for(String str : list) {
			if(max < map.get(str)) {
				answer = str;
				max = map.get(str);
			}
		}
		
		System.out.print(answer);
	}
}