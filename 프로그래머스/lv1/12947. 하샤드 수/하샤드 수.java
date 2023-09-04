class Solution {
    public boolean solution(int x) {
        int tmpX = x;
        int sum = 0;
        int tmp = 0;
        while(tmpX > 0) {
            tmp = tmpX % 10;
            sum += tmp;
            tmpX = tmpX / 10;
        }
        return x % sum == 0 ? true : false;
    }
}