function solution(num) {
    var answer = 0;
    
    const recursion=(n,cnt)=>{
        if(cnt>500){
            answer=-1
            return
        }
        
        
        if(n===1) {
            answer=cnt
            return
        }
        
        if(n%2===0){
            recursion(n/2,cnt+1)
        }else{
            recursion(n*3+1,cnt+1)
        }
    }
    
    recursion(num,0)
    
    return answer;
}