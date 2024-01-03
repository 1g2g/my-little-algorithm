function solution(want, number, discount) {
    let answer = 0;
    
    const org=want.reduce((obj,elem,i)=>{
        obj[elem]=number[i]
        return obj
    },new Object())
    
    for(let i=0;i<=discount.length-10;i++){
        const arr=discount.slice(i,i+10)
        const obj={...org}
        
        for(const elem of arr){ 
            if(obj[elem]) obj[elem]--
            else break
        }
        
        if(Object.values(obj).every((elem)=>elem===0)) answer++
    }
    
    return answer;
}