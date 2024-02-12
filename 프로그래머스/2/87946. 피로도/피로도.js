function solution(k, dungeons) {
    let answer = -1
    
    const len=dungeons.length
    const visited=Array(len).fill(false)
    
    const visit=(idx,hp,cnt)=>{
        if(answer<cnt) answer=cnt
        for(let i=0;i<len;i++){
            if(visited[i]||hp<dungeons[i][0]) continue
            
            visited[i]=true
            visit(i,hp-dungeons[i][1],cnt+1)
            visited[i]=false
        }
    }
    visit(0,k,0)
    
    return answer;
}