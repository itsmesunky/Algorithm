class Solution {
    public int solution(String number) {
        int sum = 0;
		for(char ch : number.toCharArray()) {
			sum += ch - '0';
		}
		return sum % 9;
    }
}