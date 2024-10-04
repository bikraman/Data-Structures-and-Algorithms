
//   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


function merge(a, b) {

    if(a.length === 0) {
        return b
    }

    if(b.length === 0) {
        return a
    }

    let final = []

    let p1 = 0
    let p2 = 0

    let i = 0

    while(i < a.length + b.length) {

        // console.log(`i: ${i} p1: ${p1} p2: ${p2}`)

        if (a[p1] < b[p2]) {
            final.push(a[p1])
            p1++
            i++
            
        }
        else if (b[p2] < a[p1]) {
            final.push(b[p2])
            p2++
            i++
        }
        else if (a[p1] === b[p2]) {

            final.push(b[p2])
            final.push(a[p1])

            p1++
            p2++

            i = i + 2
        }
        else if(a[p1] === undefined){

            final.push(b[p2])
            p2++

            i++
        }
        else if(b[p2] === undefined) {
            final.push(a[p1])
            p1++

            i++
        }
    }

    return final

}


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let a = []
    let b = []

    let flag = true
    let curr = null

    if (list1 !== null && list1 !== undefined) {
        curr = list1
        while(flag) {
    
            if (curr.next === null) {
                flag = false
            }
    
            a.push(curr.val)
            curr = curr.next
        }   
    }

    flag = true

    if (list2 !== null && list2 !== undefined) {
        curr = list2

        while(flag) {
    
            if (curr.next === null) {
                flag = false
            }
    
            b.push(curr.val)
            curr = curr.next
        }
    }

    let sorted_final = merge(a,b)

    curr = null

    for (let i = sorted_final.length - 1; i >= 0; i--) {
        const elem = new ListNode(sorted_final[i])
        elem.next = curr
        curr = elem
    }

    return curr
};

const fifth = new ListNode(12)
const fourth = new ListNode(9, fifth)
const third = new ListNode(7, fourth)
const second = new ListNode(6, third)
const head = new ListNode(5, second)

const second2 = new ListNode(13)
const head2 = new ListNode(4, second2)
console.log(mergeTwoLists(head, head2))


