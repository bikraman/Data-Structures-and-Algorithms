
//   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let final = []

    let flag = true
    let curr = null


    if (list1 !== null || list1 !== undefined) {
        curr = list1
        while(flag) {
    
            if (curr.next === null) {
                flag = false
            }
    
            final.push(curr.val)
            curr = curr.next
        }   
    }

    flag = true

    if (list2 !== null || list2 !== undefined) {
        curr = list2

        while(flag) {
    
            if (curr.next === null) {
                flag = false
            }
    
            final.push(curr.val)
            curr = curr.next
        }
    }

    let sorted_final = final.sort((a, b) => a - b)

    curr = null

    for (let i = sorted_final.length - 1; i >= 0; i--) {
        const elem = new ListNode(sorted_final[i])
        elem.next = curr
        curr = elem
    }

    return curr
};

const fifth = new ListNode(5)
const fourth = new ListNode(4, fifth)
const third = new ListNode(3, fourth)
const second = new ListNode(2, third)
const head = new ListNode(1, second)


const head2 = new ListNode(10)
mergeTwoLists(head, head2 )