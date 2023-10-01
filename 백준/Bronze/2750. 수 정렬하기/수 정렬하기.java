import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
 
public class Main {
 
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		int N = Integer.parseInt(br.readLine());
		int[] arr = new int[N];
		
		for(int i = 0; i < N; i++) {
			arr[i] = Integer.parseInt(br.readLine());
		}
		
		// 선택 정렬
		for(int i = 0; i < arr.length - 1; i++) {
			int idx = i;
			for(int j = i + 1; j < arr.length; j++) {
				if(arr[j] < arr[idx]) {
					idx = j;
				}
			}
			int tmp = arr[i];
			arr[i] = arr[idx];
			arr[idx] = tmp;
		}
		
		for(int i : arr) {
			bw.write(String.valueOf(i));
			bw.newLine();
		}
		
		bw.flush();
		bw.close();
	}
}