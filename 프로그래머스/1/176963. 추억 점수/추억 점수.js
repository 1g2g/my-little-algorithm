function solution(name, yearning, photo) {
    const score=name.reduce((arr,member,i)=>{
        arr[member]=yearning[i]?yearning[i]:0
        return arr
    },new Object())
    
    return photo.map((elem)=>{
        const sum= elem.reduce((acc,member)=>{
            return score[member]?acc+score[member]:acc
        },0)
        return sum
    }) 
}