function solution(arr, divisor) {
    const answer= arr.reduce((acc,elem)=>{
        if(elem%divisor===0){
            acc.push(elem)
        }
        return acc
    },[]).sort((a,b)=>a-b)
    
    return answer.length===0?[-1]:answer;
}