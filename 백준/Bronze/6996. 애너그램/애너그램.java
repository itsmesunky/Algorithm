import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		// 테스트 케이스
		int TC = Integer.parseInt(br.readLine());
		
		for(int i = 0; i < TC; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			String str1 = st.nextToken();
			String str2 = st.nextToken();
			
			HashMap<Character, Integer> map1 = new HashMap<Character, Integer>();
			HashMap<Character, Integer> map2 = new HashMap<Character, Integer>();
			
			for(char c : str1.toCharArray()) {
				map1.put(c, map1.getOrDefault(c, 0)+1);
			}
			
			for(char c : str2.toCharArray()) {
				map2.put(c, map2.getOrDefault(c, 0)+1);
			}
			
			if(map1.equals(map2)) {
				System.out.printf("%s & %s are anagrams.\n", str1, str2);
			} else {
				System.out.printf("%s & %s are NOT anagrams.\n", str1, str2);
			}
		}
	}
}