# 문자열 my_string이 매개변수로 주어집니다.
# my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

# 제한사항
# 1 ≤ my_string의 길이 ≤ 1,000
# my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

# 입출력 예 설명

# 입출력 예 #1
# "aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.

# 입출력 예 #2
# "1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.

# 유의사항
# 연속된 숫자도 각각 한 자리 숫자로 취급합니다.

def solution(my_string):
    answer = 0
    
    for i in range(len(my_string)):
        if my_string[i].isdigit():
            answer += int(my_string[i])
    
    return answer

print( solution("aAb1B2cC34oOp") )
print( solution("1a2b3c4d123") )

# isdigit() - string 클래스에 있는 메서드
# 문자열.isdigit() 로 사용하는 메서드
# 문자열이 '숫자'로만 이루어져있는지 확인하는 함수
# 문자가 '단 하나'라도 있다면 False를 반환, 모든 문자가 '숫자'로만 이루어져있으면 True를 반환
# str.isdigit() 은 음수를 뜻하는 '-', 소수점을 뜻하는 '.' 이것들을 숫자가 아닌 문자로 판단을 하기 때문에 실수나 음수를 판단하지 못한다.
# 즉, "-2".isdigit(), "1.234".isdigit() 둘다 False 가 나오게 된다.

# 정리하자면 "오직 0을 포함한 양수형 정수로만 이루어진 문자열"만 isdigit에서 True가 나올 수 있다.
# 추가적으로 지수를 뜻하는 n제곱 2³, 3², 4² 이것도 True가 올 수 있다.




