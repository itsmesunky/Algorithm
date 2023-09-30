import java.util.Arrays;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
		
		for(int i = 0; i < commands.length; i++) {
			int startIdx = commands[i][0];
			int lastIdx = commands[i][1];
			int[] tmp = new int[lastIdx - startIdx + 1];
			
			for(int j = 0; j < tmp.length; j++) {
				tmp[j] = array[startIdx - 1];
				startIdx++;
			}
			
			// 정렬
			Arrays.sort(tmp);
			answer[i] = tmp[commands[i][2]-1];
		}
		return answer;
    }
}