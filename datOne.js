
// dayOne
/*function dayOne(s) {
  let str1 = s.split("")
  let isShow = false
  let small
  let max
  let arr = []
  let position
  let length=0
  // while(str1.length !=0){
    while(isShow == false){
      isShow = true
      small = str1[0]
      console.log(str1[1])
      if(arr.length != 0){
        console.log("进来了吗")
        for(let i = 1; i < str1.length; i++){
          if(small <= arr[arr.length-1]){
            small = str1[i]
            position = i
            
          }else{
            if(small > str1[i]&& str1[i] > arr[arr.length-1]){
              small = str1[i]
              position = i
            }
            if( i == str1.length-1){
              isShow = false
              arr.push(str1.splice(position,1))
              length +=1
            }
          }
          
        }
      }else{
        for(let i = 1; i < str1.length; i++){
          if(small > str1[i]){
            console.log(small)
            small = str1[i]
            position = i
            if( i == str1.length-1){
              isShow = false
              arr.push(str1.splice(position,1))
              length +=1
            }
          }
        }
        if(arr.length == 0){
          arr.push(str1.splice(0,1))
          isShow = false
          length +=1
        }
        console.log(arr)
      }
      console.log(isShow)
    }
    // console.log(arr.join(""))
    while(isShow == true){
      isShow = false
      max = str1[0]
      for(let i = 1 ; i<str1.length;i++){
        if( arr.length == length){
          if(max < str1[i]){
            max = str1[i]
            position = i
          }
          if( i == str1.length-1){
            isShow = true
            arr.push(str1.splice(position,1))
          }
        }else{
          if(max < str1[i] && str1[i] < arr[arr.length-1]){
            max = str1[i]
            position = i
            if( i == str1.length-1){
              isShow = true
              arr.push(str1.splice(position,1))
            }
          }
        }
        
      }
    }
  // }
  return arr.join("")
};
// console.log(toStr("aaaabbbbcccc")) 
dayOne("aaabbbccc")
*/