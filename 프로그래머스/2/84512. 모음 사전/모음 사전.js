function solution(word) {
    let answer = 0;
    
    const alphabet=['A', 'E', 'I', 'O', 'U']
    const findWord=(value)=>{
        if(value===word) return true
        if(value.length===5) return false
        
        for(let i=0;i<5;i++){
            answer++
            if(findWord(value+alphabet[i])) return true
        }
    } 
    
    findWord('',0)
   
    return answer;
}