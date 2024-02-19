function solution(n) {
    const map=new Map()
    
    map[2]=2
    map[1]=1
    
    for(let i=3;i<=n;i++){
        map[i]=(map[i-1]+map[i-2])%1000000007
    }
    
    return map[n]
}