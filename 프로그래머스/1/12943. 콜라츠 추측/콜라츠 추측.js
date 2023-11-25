const recursion=(n,cnt)=>{
    if(cnt>500){ 
        return -1
    }


    if(n===1) { 
        return cnt
    }

    if(n%2===0){
        return recursion(n/2,cnt+1)
    }else{
        return recursion(n*3+1,cnt+1)
    }
}

function solution(num) { 
    return recursion(num,0)
}