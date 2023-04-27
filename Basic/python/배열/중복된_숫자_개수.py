# 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때,
# array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

# 제한사항
# 1 ≤ array의 길이 ≤ 100
# 0 ≤ array의 원소 ≤ 1,000
# 0 ≤ n ≤ 1,000

# 입출력 예 설명

# 입출력 예 #1
# [1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.

# 입출력 예 #2
# [0, 2, 3, 4] 에는 1이 0개 있습니다.

def solution(array, n):
       
    # n 과 일치하는 array 요소가 있으면 answer 를 1씩 증가시킴
    answer = 0
    for i in range(len(array)):
        if array[i] == n:
            answer += 1
    return answer
  
    # 빈 배열에 n 과 일치하는 array 요소를 담고 그 인덱스를 반환
    # result = []
    # for i in range(len(array)):
    #     if array[i] == n:
    #         result.append(array[i])
    # return len(result)
  
print (solution([1, 1, 2, 3, 4, 5], 1))
print (solution([0, 2, 3, 4], 1))
