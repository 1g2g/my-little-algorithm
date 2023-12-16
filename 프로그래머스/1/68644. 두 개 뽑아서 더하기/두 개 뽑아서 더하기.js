function solution(numbers) {
    const answer = [];
    
    const len=numbers.length
    
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            answer.push(numbers[i]+numbers[j])
        }
    }
    
    return answer.filter((a,i)=>i===answer.indexOf(a)).sort((a,b)=>a-b)
}