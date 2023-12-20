function solution(k, tangerine) {
    const stack=[]
    
    const organized=tangerine.reduce((obj,t)=>{
        obj[t]=(obj[t]||0)+1
        return obj
    },new Object())
    
    const species=Object.keys(organized).sort((a,b)=>organized[b]-organized[a])
    
    for(let i=0;i<species.length;i++){
        const t=species[i]
        
        stack.push(t)
        k-=organized[species[i]]
        
        if(k<=0) break
    }
    
    return stack.length
}