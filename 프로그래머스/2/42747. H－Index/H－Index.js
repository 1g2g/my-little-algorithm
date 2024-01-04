function solution(citations) {
    let answer = 0;
    
    citations.sort((a,b)=>b-a)
    
    for(let i=0;i<citations.length;i++){
        const c=citations[i]
        if(c>=i+1) answer=i+1
    }
    
    return answer;
}