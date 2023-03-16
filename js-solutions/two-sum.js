class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next;
    }
}

const list1 = new ListNode(3);
const ten = new ListNode(10);
const six = new ListNode(6);

list1.next = ten;
ten.next = six;

const list2 = new ListNode(4);
const five = new ListNode(5);
const two = new ListNode(2);
const nine = new ListNode(9);

list2.next = five;
five.next = two;
two.next = nine;

  
const addTwoNumbers = (l1, l2) => {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2) {

        let val1 = l1 ? l1.val : 0;  // if l1 has a value, store it to variable, else just store 0
        let val2 = l2 ? l2.val : 0;

        let sum = carry + val1 + val2; // create a sum variable that adds val1 to val2 and the number stored in carry

        if (l1) l1 = l1.next; // if l1 is not null, move to the next node
        if (l2) l2 = l2.next;

        carry = Math.floor(sum / 10); // divide sum and only get the whole number, ignore decimals

        current.next = new ListNode(sum % 10); // creates a new node with the value of either the sum of its remainder
        current = current.next; //updates current to be its next

        if (carry > 0) {
            current.next = new ListNode(carry); // if we still have a carry after adding all of the values, add the carry to a new node
        }

    }

    return dummyHead.next; //return the new list

}

addTwoNumbers(list1, list2);