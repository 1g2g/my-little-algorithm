function solution(numbers) {
    const answer = [];
    
    for(const num of numbers){
        if(num%2===0){
            answer.push(num+1)
            continue
        }
        
        const bin=num.toString(2)
        const zeroIdx=bin.lastIndexOf('0')
        
        if(zeroIdx===-1){
            answer.push(parseInt('10'+bin.slice(1), 2))
        }else{
            const value=bin.slice(0,zeroIdx)+'10'+bin.slice(zeroIdx+2)
            answer.push(parseInt(value,2))
        }   
    }
    
    return answer;
}