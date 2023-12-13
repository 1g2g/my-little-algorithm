function solution(absolutes, signs) {
    return absolutes.reduce((sum,num,i)=>{
        if(signs[i]){
            sum+=num
        }else{
            sum-=num
        }
        return sum
    },0)
    
}