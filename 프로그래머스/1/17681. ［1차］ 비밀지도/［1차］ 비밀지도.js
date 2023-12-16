const getBinaryNumber=(max,num)=>{
    let bin=''
    
    while(num>=1){
        if(num%2===1){
            bin+='1'
        }else{
            bin+='0'
        }
        num=Math.floor(num/2)
    }
    
    return bin.padEnd(max,'0').split('').reverse().join('')
}
function solution(n, arr1, arr2) {
    const answer = Array(n).fill('')
    
    arr1.forEach((num,i)=>{
        const bin1=getBinaryNumber(n,num)
        const bin2=getBinaryNumber(n,arr2[i])
        
        bin1.split('').forEach((bin,j)=>{
            if(bin|bin2[j]) answer[i]+='#'
            else answer[i]+=' '
        })
    })
    
    return answer;
}