 // Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = val
    this.next = next
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    const map = new Map();

    let flag = true 
    let curr = head
    while(flag) {

        if (curr.next === null || curr.next === undefined) {
            flag = false
            return false;
        }

        if (map.has(curr.val)) {
            flag = false;
            return true;
        }

        map.set(curr.val, null)

        curr = curr.next;
    }
    
    
};

const fifth = new ListNode(5)
const fourth = new ListNode(4, fifth)
const third = new ListNode(3, fourth)
const second = new ListNode(2, third)
const head = new ListNode(1, second)

fifth.next = second;

console.log(hasCycle(head))


