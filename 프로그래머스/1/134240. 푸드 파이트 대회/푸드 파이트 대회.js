function solution(food) {
    const result=[]
    
    for(let i=1;i<food.length;i++){
        for(let j=0;j<food[i]/2;j++){
            if(j===Math.floor(food[i]/2)) continue
            result.push(i)
        }
    }
    
    return [...result,'0',...result.reverse()].join('')
}