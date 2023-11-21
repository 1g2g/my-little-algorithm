function solution(players, callings) {
    const orders=players.reduce((obj,player,i)=>{
        obj[player]=i
        return obj
    },{})
    
    callings.forEach((player)=>{
        const curIdx=orders[player]
        const nextIdx=curIdx-1
        
        const nextPlayer=players[nextIdx]
        
        players[curIdx]=nextPlayer
        players[nextIdx]=player
        
        orders[player]=nextIdx
        orders[nextPlayer]=curIdx
    })
    
    return players 
}