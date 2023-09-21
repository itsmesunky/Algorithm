import java.util.*;

class Solution {
    public int solution(int[][] board, int[] moves) {
        // Stack 객체 생성
        Stack<Integer> stack = new Stack<>();
        
        int answer = 0;
        
        for(int i = 0; i < moves.length; i++) {
            for(int j = 0; j < board.length; j++) {
                int doll = board[j][moves[i]-1];
                // board에 인형이 존재하는 경우
                if(doll != 0) {
                    // Stack이 비어있지 않은 경우
                    if(!stack.isEmpty()) {
                        if(stack.peek() == doll) {
                            board[j][moves[i]-1] = 0;
                            stack.pop();
                            answer = answer + 2;
                            break;
                        } else {
                            stack.push(doll);
                            board[j][moves[i]-1] = 0;
                            break;
                        }
                    } else {
                        stack.push(doll);
                        board[j][moves[i]-1] = 0;
                        break;
                    }
                }
            }
        }
        
        return answer;
    }
}