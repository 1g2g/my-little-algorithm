function solution(array, height) {
    return array.reduce((sum,cur)=>{
        if(cur>height) return sum+1
        else return sum
    },0)
}