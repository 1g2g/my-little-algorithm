function solution(maps) {
    const n=maps.length
    const m=maps[0].length
    
    const dx=[0,0,1,-1]
    const dy=[1,-1,0,0]
    
    const queue=[[0,0,1]]
    
    while(queue.length){
        const [curX,curY,d]=queue.shift()
        
        for(let i=0;i<4;i++){
            const [x,y]=[curX+dx[i],curY+dy[i]]
            
            if(x>=n||x<0||y>=m||y<0) continue
            if(maps[x][y]===1){
                queue.push([x,y,d+1])
                maps[x][y]=d+1
            }
        }
    }
    return maps[n-1][m-1]===1?-1:maps[n-1][m-1];
}