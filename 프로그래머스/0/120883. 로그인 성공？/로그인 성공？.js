function solution(id_pw, db) {
    var answer = '';
    
    const sameId=db.find((item)=>item[0]===id_pw[0])
    console.log(sameId)
    if(!sameId) return 'fail'
    if(sameId[1]===id_pw[1]) return 'login'
    else return 'wrong pw'
    return answer;
}