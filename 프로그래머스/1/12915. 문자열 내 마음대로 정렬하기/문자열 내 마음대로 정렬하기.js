function solution(strings, n) {
    strings.sort((a,b)=>{
        if(b>a) return -1
        return 1
    })
    return strings.sort((a,b)=>{
        if(b[n] >a[n]) return -1
        return 1
    })
}