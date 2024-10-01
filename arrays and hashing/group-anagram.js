const strs = ["eat","tea","tan","ate","nat","bat"]

var groupAnagrams = function(strs) {
    const len = strs.length;

    const map = new Map();

    const finalResult = []


    for (let i = 0; i < len; i++) {

        const currWord = strs[i];
        const splitAndSorted = currWord.split("").sort().toString();

        if (map.has(splitAndSorted)) {
            map.get(splitAndSorted).push(currWord);
        }
        else {
            map.set(splitAndSorted, [currWord])
        }

    }


    for (key of map.values()) {
        finalResult.push(key)
    }

    return finalResult;
};

groupAnagrams(strs)



