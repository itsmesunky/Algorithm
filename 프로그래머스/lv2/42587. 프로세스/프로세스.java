import java.util.*;

// 프로세스 클래스 생성
class Process {
	int idx; // index
	int priority; // 우선순위
	
	public Process(int idx, int priority) {
		this.idx = idx;
		this.priority = priority;
	}
}

class Solution {
    public int solution(int[] priorities, int location) {
        // Queue 생성
		Queue<Process> Q = new LinkedList<Process>();
		for(int i = 0; i < priorities.length; i++) {
			Q.offer(new Process(i, priorities[i]));
		}
		
		int answer = 0;
		
		while(!Q.isEmpty()) {
			Process tmp = Q.poll();
			for(Process proc : Q) {
				if(tmp.priority < proc.priority) {
					Q.offer(tmp);
					tmp = null;
					break;
				}
			}
			if(tmp != null) {
				answer++;
				if(tmp.idx == location) {
					return answer;
				}
			}
		}
		
		return answer;
    }
}