function solution(triangle) {
    const len=triangle.length
    const dp=Array.from(Array(len),()=>new Array(len))
    
    for(let i=1;i<len;i++){
        for(let j=0;j<=i;j++){
            triangle[i][j]+=Math.max(triangle[i-1][j-1]??0,triangle[i-1][j]??0)
        }
    }
    
    return Math.max(...triangle[len-1]);
}