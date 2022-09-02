class Solution:
    def isValid(self, s: str) -> bool:
        parens = []
        
        for c in s:
            if (c == '(') or (c == '{') or (c == '['):
                parens.append(c)
            if (c == ')') or (c == '}') or (c == ']'):
                if len(parens) == 0:
                    return False
                match c:
                    case ')':
                        if '(' == parens[-1]:
                            parens.pop(-1)
                        else:
                            return False
                    case '}':
                        if '{' == parens[-1]:
                            parens.pop(-1)
                        else:
                            return False
                    case ']':
                        if '[' == parens[-1]:
                            parens.pop(-1)
                        else:
                            return False
                    case _:
                        continue
        if len(parens) > 0:
            return False
        return True