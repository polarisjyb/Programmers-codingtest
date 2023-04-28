# 문자열 my_string이 매개변수로 주어집니다.
# my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

# 제한사항
# 1 ≤ my_string의 길이 ≤ 1,000

# 입출력 예 설명

# 입출력 예 #1
# my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.

# 입출력 예 #2
# my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.

def solution(my_string):
    result = []
    answer = ''
    
    for i in range(len(my_string)-1, -1, -1):
        result.append(my_string[i])
        answer = ''.join(result)
                          
    return answer
  
print( solution("jaron") )  # "noraj"
print( solution("bread") )  # "daerb"
