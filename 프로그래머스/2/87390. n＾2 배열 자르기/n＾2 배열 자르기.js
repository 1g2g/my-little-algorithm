function solution(n, left, right) {
    const answer = [];
    
    for(let i=left;i<=right;i++){
        const [x,y]=[Math.floor(i/n),i%n]
        answer.push(Math.max(x,y)+1)
    }
    
    return answer;
}