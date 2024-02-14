function solution(priorities, location) {
    const sorted=[...priorities].sort((a,b)=>b-a)
    const priority=priorities.reduce((arr,elem,idx)=>{
        arr.push([elem,idx])
        return arr
    },[])
    
    let idx=0
    
    while(1){
        const [elem,curIdx]=priority.shift()
        
        if(elem===sorted[0]){
            sorted.shift()
            idx++
            if(curIdx===location) return idx
        }else if(elem<sorted[0]){
            priority.push([elem,curIdx])
        }
    }
    
    return -1
}