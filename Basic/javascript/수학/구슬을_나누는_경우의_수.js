// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다.
// 구슬은 모두 다르게 생겼습니다.
// 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ balls ≤ 30
// 1 ≤ share ≤ 30
// 구슬을 고르는 순서는 고려하지 않습니다.
// share ≤ balls

// 입출력 예 설명

// 입출력 예 #1
// 서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다. 

// 입출력 예 #2
// 서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.


// 4! = 4*3*2*1 = 24
// n! = n * (n-1) * ... *1

const solution = (balls, share) => {
  let b = balls;
  let s = share;
  let one = 1;
  // let two = 1;
  let three = 1;
  
  for (let i = b; i >= b-s+1; i--) {
      one *= i;
  };
  // for (let i = b-s; i >= 1; i--) {
  //     two *= i;
  // };
  for (let i = s; i >= 1; i--) {
      three *= i;
  };
  
  // return Math.floor(one / (two * three));
  return (one / three);
};

console.log( solution(3, 2) );
console.log( solution(5, 3) );


