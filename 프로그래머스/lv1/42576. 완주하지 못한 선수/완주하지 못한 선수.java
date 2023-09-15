import java.util.HashMap;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        HashMap<String, Integer> pMap = new HashMap<String, Integer>();
		for(String str : participant) {
			pMap.put(str, pMap.getOrDefault(str, 0)+1);
		}
		for(String str : completion) {
			pMap.put(str, pMap.getOrDefault(str, 0)-1);
		}
		for(String key : pMap.keySet()) {
			if(pMap.get(key) != 0) {
				answer = key;
			}
		}
        return answer;
    }
}