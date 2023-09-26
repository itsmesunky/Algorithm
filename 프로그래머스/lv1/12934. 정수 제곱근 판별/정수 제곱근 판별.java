class Solution {
    public long solution(long n) {
       // n이 어떤 수의 제곱근인지 판별
		double x = Math.sqrt(n);
		
		// x를 String으로 변환
		String str = String.valueOf(x);
		
		// str이 정수가 아니면 -1을 반환
		if(!str.substring(str.indexOf('.')+2).equals("")) {
			return -1;
		} else {
			return (long) Math.pow(x+1, 2);
		}
    }
}