function solution(numbers, target) {
    let answer = 0;
    const len=numbers.length
    
    const calculate=(value,cnt)=>{
        if(value===target&&cnt===len) {
            answer++
            return
        }
        
        if(cnt===len) return
        
        calculate(value+numbers[cnt],cnt+1)
        calculate(value-numbers[cnt],cnt+1)
    }
    
    calculate(0,0)
    
    return answer;
}