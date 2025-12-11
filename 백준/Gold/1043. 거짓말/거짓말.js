const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

// 사람의 수, 파티의 수
const [N, M] = input.shift().split(" ").map(Number);

// 진실을 아는 사람의 수와 번호
const knows = input.shift().split(" ").map(Number);
const knowsCount = knows.shift();

if (knowsCount === 0) {
  console.log(M);
  return;
}

// 인원별 참석 파티
const peopleWithParty = Array.from({ length: N + 1 }, () => []);
const visited = Array(knowsCount + 1).fill(false);

// 파티별 참석 인원
const partyWithPeople = Array.from({ length: M + 1 }, () => []);
const parties = Array(M + 1).fill(true);

input.forEach((str, partyNo) =>
  str
    .split(" ")
    .slice(1)
    .forEach((value) => {
      const peopleNo = parseInt(value);
      peopleWithParty[peopleNo].push(partyNo + 1);
      partyWithPeople[partyNo + 1].push(peopleNo);
    })
);

const DFS = (peopleNo) => {
  const attendsParties = peopleWithParty[peopleNo];

  for (const party of attendsParties) {
    parties[party] = false;
    const attendsPeoples = partyWithPeople[party];
    for (const people of attendsPeoples) {
      if (!visited[people]) {
        visited[people] = true;
        DFS(people);
      }
    }
  }
};

for (const know of knows) {
  visited[know] = true;
  DFS(know);
}

console.log(parties.filter((party) => party).length - 1);
