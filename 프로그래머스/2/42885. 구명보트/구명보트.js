function solution(people, limit) {
    let answer = 0
    const len=people.length
    let r=len-1,l=0 
    
    people.sort((a,b)=>b-a)
     
    
    while(l<=r){
        const left=people[l]
        const right=people[r] 
        
        if(left+right<=limit){
            r-- 
        }
        l++
        answer++ 
    }
    
    return answer;
} 