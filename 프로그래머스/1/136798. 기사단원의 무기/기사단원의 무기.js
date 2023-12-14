const divisor=(num)=>{
    if(num===1) return 1
    
    let cnt=0
    const sqrtNum=Math.sqrt(num)===Math.floor(Math.sqrt(num))
    
    for(let i=1;i<=Math.sqrt(num);i++){
        if(num%i===0) cnt++
    }
    
    return sqrtNum?(cnt-1)*2+1:cnt*2
}

function solution(number, limit, power) {
    const sum=Array(number).fill().map((arr,i)=>i+1).reduce((acc,num)=>{
        const divide=divisor(num)
        
        if(divide>limit) return acc+power
        return acc+divide
    },0) 
    
    return sum
} 
