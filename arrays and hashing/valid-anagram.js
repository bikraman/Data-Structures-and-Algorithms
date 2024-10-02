/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let s_sorted = s.split("").sort().join("")
    let t_sorted = t.split("").sort().join("")

    console.log(s_sorted)
    console.log(t_sorted)
    
    if (s_sorted.length !== t_sorted.length)
        return false;

    let i = 0

    while ( i < s_sorted.length) {
        if (s_sorted[i] !== t_sorted[i]) {
            return false;
        }
        i++;
    }

    return true;
};

s = "anagram"
t = "nagaram"

isAnagram(s,t)