const toSec = (time) => {
    const [h, m, s] = time.split(":").map(Number);
    return h * 3600 + m * 60 + s;
};

const toTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
};

function solution(play_time, adv_time, logs) {
    const play = toSec(play_time);
    const adv = toSec(adv_time);

    // 1. Imos 배열 초기화
    const timeline = Array(play + 1).fill(0);

    // 2. 로그 적용 (시청 시작 +1, 종료 -1)
    for (const log of logs) {
        const [start, end] = log.split("-").map(toSec);
        timeline[start] += 1;
        timeline[end] -= 1;
    }

    // 3. 1차 prefix sum → 각 초의 시청자 수 계산
    for (let i = 1; i <= play; i++) {
        timeline[i] += timeline[i - 1];
    }

    // 4. 2차 prefix sum → 누적 시청 시간 계산
    const prefixSum = Array(play + 1).fill(0);
    prefixSum[0] = timeline[0];

    for (let i = 1; i <= play; i++) {
        prefixSum[i] = prefixSum[i - 1] + timeline[i];
    }

    // 5. 슬라이딩 윈도우로 광고 구간 최댓값 찾기
    let maxView = prefixSum[adv - 1];
    let bestStart = 0;

    for (let start = 1; start + adv - 1 <= play; start++) {
        const end = start + adv - 1;
        const view = prefixSum[end] - prefixSum[start - 1];

        if (view > maxView) {
            maxView = view;
            bestStart = start;
        }
    }

    // 6. 최적의 시작 시각 반환
    return toTime(bestStart);
}
