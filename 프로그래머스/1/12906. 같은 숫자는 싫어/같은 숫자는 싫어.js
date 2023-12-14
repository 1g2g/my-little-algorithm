function solution(arr)
{
    const stack=[]
     
    arr.forEach((elem)=>{
        const top=stack[stack.length-1]
        if(top!==elem){
            stack.push(elem)
        }
    })
     return stack
}