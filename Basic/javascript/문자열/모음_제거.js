// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// my_string은 소문자와 공백으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000

// 입출력 예 설명

// 입출력 예 #1
// "bus"에서 모음 u를 제거한 "bs"를 return합니다.

// 입출력 예 #1
// "nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다.

const solution = my_string => {
  let answer = '';    
  let str = 'aeiou';   
  str.split('');
  
   for (let i = 0; i< my_string.length; i++) {
       if (!str.includes(my_string[i])) answer += my_string[i];
   };
  
  return answer;
  
  // replace 정규 표현식 풀이
  // return my_string.replace(/[a,e,i,o,u]/g, '');
};

console.log( solution("bus") );
console.log( solution("nice to meet you") );
