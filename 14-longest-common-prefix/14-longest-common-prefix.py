class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        longestStr = strs[0]
        isLong = False
        
        while isLong == False:
            for i in range(0, len(strs), 1):
                if strs[i].startswith(longestStr) == False:
                    isLong = False
                    break
                else:
                    isLong = True
            if isLong == True:
                return longestStr
            longestStr = longestStr[:-1]
            if len(longestStr) == 0:
                return ""
            
        
        