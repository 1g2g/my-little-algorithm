function solution(s, n) {
    return s.split('').map((alphabet)=>{
        const curCode=alphabet.charCodeAt()
        
        if(curCode>=65&&curCode<=90){
            let uni=curCode+n
            if(uni>90) uni-=26
            return String.fromCharCode(uni)
        }
        else if(curCode>=97&&curCode<=122){
            let uni=curCode+n
            if(uni>122) uni-=26
            return String.fromCharCode(uni)
        } 
        
        return alphabet
    }).join('')
}