function solution(arr) {
    const mul=[]
    
    arr.sort((a,b)=>a-b)
    let i=arr[0]
    while(i<arr[arr.length-1]){
        let j=0
        while(j<=arr.length-1){
            const n=arr[j]
            if(n%i===0){
                arr[j]=n/i
                if(mul[mul.length-1]!==i) mul.push(i)
            }
            j++
        }
        if(arr.every(n=>n%i!==0)) i++
    }
    
    return arr.reduce((acc,num)=>acc*num,1)*mul.reduce((acc,num)=>acc*num,1);
}