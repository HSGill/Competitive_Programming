/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(stringA, stringB) {

    function createCharMap(text) {
        let charMap = {};
        for (let i = 0; i < s.length; i++) {
            if (charMap[text[i]] === 'undefined') {
                charMap[text[i]] = 1;
            } else {
                charMap[text[i]]++;
            }
        }
        return charMap;
    }
    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(s);
        let stringBMap = createCharMap(t);
        for (let i = 0; i < s.length; i++) {
            if (stringAMap[i] !== stringBMap[i]) {
                return false;
            }
        }
        return true;

    }
    else {
        return false;
    }
}