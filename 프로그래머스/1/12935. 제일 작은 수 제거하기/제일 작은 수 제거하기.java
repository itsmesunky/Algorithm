import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> solution(int[] arr) {
       List<Integer> answer = new ArrayList<Integer>();
		if(arr.length == 1) {
			answer.add(-1);
		} else {
			// 리스트로 변환
			for(int i = 0; i < arr.length; i++) {
				answer.add(arr[i]);
			}
			// 작은 수 찾기
			int min = Integer.MAX_VALUE;
			int idx = 0;
			for(int i = 0; i < arr.length; i++) {
				if(min > arr[i]) {
					min = arr[i];
					idx = i;
				}
			}
			answer.remove(idx);
		}
		return answer;
    }
}