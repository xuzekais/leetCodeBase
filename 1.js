/* 给你一个链表和一个特定值 x ，请你对链表进行分隔，使得所有小于 x 的节点都出现在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

 

示例：

输入：head = 1->4->3->2->5->2, x = 3
输出：1->2->2->4->3->5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/partition-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */


var partition = function(head, x) {
  //创建小于x的链表
  let small = new ListNode(0)
  //给定小于x链表的表头
  const smallHead = small
  //创建大于x的链表
  let lagre = new ListNode(0)
  //给定大于x链表的表头
  const lagreHead = lagre

  //遍历原链表
  while(head != null){
      //当前节点小于x时
      if(head.val < x){
          //small下一个节点指向符合要求的原链表钟的节点
          small.next = head
          //下一次从small的新的节点开始
          small = small.next
      }else{
          //lagre下一个节点指向符合要求的原链表钟的节点
          lagre.next = head
          //下一次从lagre的新的节点开始
          lagre = lagre.next
      }
      //更新判断条件
      head = head.next
  }

  //清空lagre最后的一个节点的next指向
  lagre.next = null
  //将small的末节点指向lagre真正一样上的头节点
  small.next = lagreHead.next

  //输出符合要求的链表
  return smallHead.next
};