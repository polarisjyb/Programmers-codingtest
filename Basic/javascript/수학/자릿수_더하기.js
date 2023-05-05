// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ n ≤ 1,000,000

// 입출력 예 설명

// 입출력 예 #1
// 1 + 2 + 3 + 4 = 10을 return합니다.

// 입출력 예 #2
// 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.

const solution = n => {
    let answer = 0;
    let str = String(n);
    
    for ( let i = 0; i < str.length; i++) {
        answer += parseInt(str[i]);
    };

    return answer;
};

console.log( solution(1234) );
console.log( solution(930211) );
