function solution(k, d) {
    let answer = 0;
    
    const dSquare=Math.pow(d,2)
    
    for(let i=0;i<=d/k;i++){
        const x=Math.pow(i*k,2)
        const y=Math.sqrt(dSquare-x)
        
        answer+=Math.floor(y/k)+1
    }
    
    return answer;
}