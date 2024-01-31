function solution(routes) {
    let answer = 1
    
    routes.sort((a,b)=>a[0]-b[0])
    let cur=routes[0][1]
    let i=1
    
    while(i<routes.length){ 
        if(cur>=routes[i][0]){
            cur=Math.min(cur,routes[i][1]) 
        }else{
            answer++
            cur=routes[i][1]
        }
        i++
    }
    
    return answer;
}