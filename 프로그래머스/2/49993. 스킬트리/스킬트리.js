function solution(skill, skill_trees) {
    const skillObj=skill.split("").reduce((obj,skill,idx)=>{
        obj[skill]=idx+1
        return obj
    },new Object())
    
    return skill_trees.reduce((answer,skill)=>{
        let flag=1
        let order=1
        for(const s of skill){
            if(skillObj[s]){
                if(order!==skillObj[s]){
                    flag=0
                }
                order++
            }
        }
        if(flag) answer++
        return answer   
    },0)
}