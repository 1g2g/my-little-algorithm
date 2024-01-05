function solution(arr1, arr2) {
    
    const col1=arr1.length
    const row1=arr1[0].length
    const row2=arr2[0].length
    
    const answer = Array.from(Array(col1),()=>[]);
    
    for(let i=0;i<col1;i++){
        for(let j=0;j<row2;j++){
            for(let k=0;k<row1;k++){
                answer[i][j]=(answer[i][j]||0)+arr1[i][k]*arr2[k][j]
            }
        }
    }
    
    return answer;
}