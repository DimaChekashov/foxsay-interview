from typing import List

class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        l=[]
        for i in range(left,right+1):
            fl,a=0,i
            if '0' in str(i):
                fl=1
            else:
                while a!=0:
                    if i%(a%10)!=0:
                        fl=1
                        break
                    a=a//10
            if fl==0:
                l.append(i)
        return l
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.selfDividingNumbers(1, 22))
    print(solution.selfDividingNumbers(47, 85))