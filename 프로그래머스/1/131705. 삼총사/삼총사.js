function solution(number) {
    let answer = 0;
    
    const dfs=(sum,idx,cnt)=>{
        if(cnt===2&&sum===0){
            answer++
            return
        }
        if(cnt===3) return
        
        for(let i=idx+1;i<number.length;i++){
            dfs(sum+number[i],i,cnt+1)
        }
    }
    
    number.forEach((num,i)=>{
        dfs(num,i,0)
    })
    
    
    return answer;
}