function solution(order) {
    const stack=[]
    let parcel=0
    for(let i=1;i<=order.length;i++){
        stack.push(i)
        while (stack.length!==0&&stack[stack.length-1]===order[parcel]) {
             stack.pop() 
             parcel++
        } 
    }
    
    return parcel
}