class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Create a dummy node to simplify the merging process
  const dummy: ListNode = new ListNode();
  let current: ListNode = dummy;

  // Traverse both lists and merge them
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach the remaining nodes from list1 or list2
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // Return the head of the merged list (next node of dummy)
  return dummy.next;
}
