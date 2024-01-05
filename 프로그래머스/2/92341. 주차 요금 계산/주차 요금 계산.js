function solution(fees, records) {
    const answer=[]
    const diffObj = {};
    const inTimeObj={}
    
    records.forEach((record)=>{
        const [time,num,cmd]=record.split(' ')
        const [hour,min]=time.split(":")
        const minTime=hour*60+min*1
        
        if(cmd==='IN'){
            inTimeObj[num]=minTime
        }else{
            const diffTime=minTime-inTimeObj[num]
            diffObj[num]=(diffObj[num]||0)+diffTime
            inTimeObj[num]=99999
        }
    })
    
    Object.entries(inTimeObj).sort((a,b)=>a[0]*1-b[0]*1).map(([key,value])=>{
        if(value!==99999){
            const diffTime=23*60+59-inTimeObj[key]
            diffObj[key]=(diffObj[key]||0)+diffTime
        }
        const pay=diffObj[key]<fees[0]?fees[1]:fees[1]+Math.ceil((diffObj[key]-fees[0])/fees[2])*fees[3]
        answer.push(pay)
    })
    
    return answer;
}