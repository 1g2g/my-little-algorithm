function solution(people, limit) {
    let answer = 0;
    
    people.sort((a,b)=>b-a)
    
    let l=0,r=people.length-1
    while(l<=r){
        if(people[l]+people[r]<=limit){
            r--
        }
        l++
        answer++
    }
    
    return answer;
}