function solution(s) {
    var answer = 0;
    const len=s.length
    const stack=[]
    const couple={'}':'{',']':'[',')':'('}
    for(let i=0;i<len;i++){
        for(let j=i;j<i+len;j++){
            const elem=s[j%len]
            if(elem==='['||elem==='{'||elem==='('){
                stack.push(elem)
            }else{
                const top=stack.pop()
                if(top!==couple[elem]){
                    break
                }
            }
            if(stack.length===0&&j+1===i+len) answer++
        }
    }
    
    
    return answer;
}