/**
 * AUTHOR : Harry Gill
 * CREATED : 27-03-2019
 * Description: Check if two strings are anagrams of each other
 * @param {string} stringA
 * @param {string} stringB
 * @return {boolean}
 */
function isAnagram(stringA, stringB) {
 
    function createCharMap(text) { 
        let charMap = {};
        for (let i = 0; i < text.length; i++) {
            if (charMap[text[i]] === 'undefined') { // mapping every character in the string to # of times it occurs within the string
                charMap[text[i]] = 1;
            } else {
                charMap[text[i]]++;
            }
        }
        return charMap;
    }
    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let i = 0; i < text.length; i++) {
            if (stringAMap[stringA[i]] !== stringBMap[stringB[i]]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}
/*
  TestCase { First = "add", Second = "dad", Expected = true },
			new TestCase { First = "aad", Second = "dad", Expected = false },
			new TestCase { First = "Astronomer", Second = "Moon starer", Expected = true },
			new TestCase { First = "thorough", Second = "through", Expected = false },
            new TestCase { First = "a", Second = "b", Expected = false },

*/