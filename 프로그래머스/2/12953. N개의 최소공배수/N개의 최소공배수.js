function solution(arr) {
    const gcd=(a,b)=>{
        if(b===0) return a
        return gcd(b,a%b)
    }
    
    return arr.reduce((acc,num)=>{
        return acc*num/gcd(acc,num)
    });
}