// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항

// 중복된 원소는 없습니다.
// 1 ≤ emergency의 길이 ≤ 10
// 1 ≤ emergency의 원소 ≤ 100

// 입출력 예 설명

// 입출력 예 #1
// emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.

// 입출력 예 #2
// emergency가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.

// 입출력 예 #3
// emergency가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.

const solution = emergency => {
  let answer = [];
  let sorted = emergency.slice();
  
  sorted.sort((a,b) => (b-a));
  
  for (let i = 0; i < emergency.length; i++) {
      answer.push(sorted.indexOf(emergency[i]) + 1);
  };
  
  return answer;
};

// sort 함수는 원본 배열을 변경
// 원본 배열 얕은 복사를 생각하지 못했음
// sort 함수의 오름, 내림차순 식을 몰랐음

console.log( solution([3, 76, 24]) );
console.log( solution([1, 2, 3, 4, 5, 6, 7]) );
console.log( solution([30, 10, 23, 6, 100]) );
