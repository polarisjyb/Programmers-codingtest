def solution(array):
    array = sorted(array)
    return array[len(array) // 2]

print(solution([1, 2, 7, 10, 11]))
print(solution([9, -1, 0]))
print(solution([1, 2, 5, 8, 6,]))
