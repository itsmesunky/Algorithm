import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		// N개의 점
		int N = Integer.parseInt(br.readLine());
		
		ArrayList<Point> list = new ArrayList<>();
		
		for(int i = 0; i < N; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			int x = Integer.parseInt(st.nextToken());
			int y = Integer.parseInt(st.nextToken());
			list.add(new Point(x, y));
		}
		
		Collections.sort(list);
		
		for(Point p : list) {
			bw.write(String.valueOf(p.x) + " " + String.valueOf(p.y));
			bw.newLine();
		}
		
		bw.flush();
		bw.close();
		
	}
	
}

class Point implements Comparable<Point> {
	int x, y;
	
	Point(int x, int y) {
		this.x = x;
		this.y = y;
	}
	
	@Override
	public int compareTo(Point o) {
		if(this.x == o.x) {
			return this.y-o.y;
		} else {
			return this.x-o.x;
		}
	}

}