/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    let j = ""
    let cleaned = s.match(/[A-Za-z0-9]/g)

    if (cleaned === null || cleaned.length === 0 )
        return true

    for (let c of cleaned) {
        j += c
    }
    

    let start = 0
    let end = s.length

    let isPalin = true

    let pointer1 = 0
    let pointer2 = j.length - 1


    if(j.length % 2 === 0) {

        while (pointer2 > pointer1) {

            if(j.charAt(pointer1).toLowerCase() !== j.charAt(pointer2).toLowerCase()) {
                isPalin = false
            }
    
            pointer1++
            pointer2-- 
        }
    }
    else {

        while (pointer1 !== pointer2) {

            if(j.charAt(pointer1).toLowerCase() !== j.charAt(pointer2).toLowerCase()) {
                isPalin = false
            }
    
            pointer1++
            pointer2--
    
        }
    }

    return isPalin;

};