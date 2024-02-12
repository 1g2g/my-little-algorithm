function solution(n) {
    const cnt=n.toString(2).split('').filter((num)=>num==='1').length
    
    for(let i=n+1;;i++){
        const nextCnt=i.toString(2).split('').filter((num)=>num==='1').length
        if(cnt===nextCnt) return i
    }
}