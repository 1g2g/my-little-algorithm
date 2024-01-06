function solution(land) {
    for(let i=1;i<land.length;i++){
        for(let j=0;j<4;j++){
            const max=Math.max(...land[i-1].filter((_,idx)=>j!==idx))
            land[i][j]+=max 
        }
    }

    return Math.max(...land[land.length-1]);
} 