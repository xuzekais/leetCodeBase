/* 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

如果不能形成任何面积不为零的三角形，返回 0。 */
function largestPerimeter(A) {
/*   A.sort()
  console.log(A);
  let x = A.length-1
  console.log(A[x] >= (A[x-1] + A[x-2]))
  while (A[x] >= (A[x-1] + A[x-2])) {
    x -= 1
  }
  
  if(x==1){
    return 0
  }else{
    return A[x]+A[x-1]+A[x-2]
  } */
  A.sort((a,b) => a-b)
  for (let i = A.length-1; i >= 1; i--){
    if(A[i] < (A[i-1] + A[i-2])){
      return A[i] + A[i-1] + A[i-2]
    }
  }
  return 0
}
var a = largestPerimeter([1,2,2,4,18,8])
console.log(a)
