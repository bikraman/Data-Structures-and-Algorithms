 // Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    if(head === null || head === undefined)
        return head

    list = []
    let cache = null; 

    printList(head)

    for (let i = 0; i < list.length; i++) {
        const item = new ListNode(list[i], cache);
        cache = item;
    }
    return cache;
};

var printList = function(head) {

    list.push(head.val)

    if (head.next === null) {
        return head;
    }
    else {
        printList(head.next)  
    }
}

const fifth = new ListNode(5)
const fourth = new ListNode(4, fifth)
const third = new ListNode(3, fourth)
const second = new ListNode(2, third)
const head = new ListNode(1, second)

const reversedList = reverseList(head)
console.log(reversedList)


