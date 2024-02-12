const getTreeCount=(toVisit,visited,graph,node1,node2)=>{
    let cnt=0

    while(toVisit.length){
        const cur=toVisit.shift()

        if(visited[cur]) continue
        visited[cur]=true

        cnt++ 

        if(cur===node1&&graph[cur].includes(node2)){
            const value=[...graph[cur].slice(0,graph[cur].indexOf(node2)),...graph[cur].slice(graph[cur].indexOf(node2)+1)]

            toVisit.push(...value)
        }
        else toVisit.push(...graph[cur])
    }
    
    return cnt
}
function solution(n, wires) {
    let min = Infinity;
    
    const len=wires.length
    const graph=Array.from(Array(n+1),()=>[])
    
    for(const [s,d] of wires){
        graph[s].push(d)
        graph[d].push(s)
    }
    
    wires.forEach(([s,d],idx)=>{
        const visited=Array(n+1).fill(false)
        const toVisit=[s]
        
        const cnt=getTreeCount(toVisit,visited,graph,s,d)
        
        if(min>Math.abs(n-cnt*2)) min=Math.abs(n-cnt*2)
    })
    return min;
}