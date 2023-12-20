function solution(n) {
    const dp={}
    dp[1]=1
    dp[2]=2
    
    for(let num=3;num<=n;num++){
        dp[num]=(dp[num-1]+dp[num-2])%1234567
    }
    
    return dp[n]
}