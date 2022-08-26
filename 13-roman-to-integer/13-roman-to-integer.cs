public class Solution {
    public int RomanToInt(string s) {
        int[] romanNums = new int[s.Length];
        int result = 0;
        
        for (int i = 0; i < s.Length; i++) {
            switch (s[i]) {
                case 'I':
                    romanNums[i] = 1;
                    break;
                case 'V':
                    romanNums[i] = 5;
                    break;
                case 'X':
                    romanNums[i] = 10;
                    break;
                case 'L':
                    romanNums[i] = 50;
                    break;
                case 'C':
                    romanNums[i] = 100;
                    break;
                case 'D':
                    romanNums[i] = 500;
                    break;
                case 'M':
                    romanNums[i] = 1000;
                    break;
                default:
                    break;
            }
        }
        
        for (int i = 0; i < romanNums.Length; i++) {
            if (i == romanNums.Length - 1) {
                result += romanNums[i];
            } 
            else if (romanNums[i] < romanNums[i + 1]) {
                result += romanNums[i + 1] - romanNums[i];
                i++;
            }
            else {
                result += romanNums[i];
            }
        }
        return result;
    }
}