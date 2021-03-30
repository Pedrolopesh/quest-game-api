const Podium = require('../models/Podium')
const Player = require('../models/Player')


module.exports = {
    async createPodium(req, res){

        const allPlayers = await Player.find();
        const allPlayerPoints = []
        const totalPodium = []

        for(let i = 0; i < allPlayers.length; i++){
            allPlayerPoints.push({playerNickname: allPlayers[i].nickname, playerScore:allPlayers[i].totalScore})
        }

        const fistPosition = allPlayerPoints.filter((item) => { return item.playerScore >= 1700 && item.playerScore <= 1800})
        const secondPosition = allPlayerPoints.filter((item) => { return item.playerScore >= 1500 && item.playerScore < 1700})
        const thierdPosition = allPlayerPoints.filter((item) => { return item.playerScore >= 1200 && item.playerScore < 1500})

        // const filtered = Math.max.apply(Math, allPlayerPoints.map( (item) => { return item.totalScore }))
        // const newList = allPlayerPoints.sort()

        let firstPodium
        let secondPodium
        let thierdPodium

        if(fistPosition.length !== 0) firstPodium = fistPosition[fistPosition.length-1]
        if(secondPosition.length !== 0) secondPodium = secondPosition[secondPosition.length-1]
        if(thierdPosition.length !== 0) thierdPodium = thierdPosition[thierdPosition.length-1]
        
        if(fistPosition.length === 0) firstPodium = fistPosition[0]
        if(secondPosition.length === 0) secondPodium = secondPosition[0]
        if(thierdPosition.length === 0) thierdPodium = thierdPosition[0]

        totalPodium.push( firstPodium, secondPodium, thierdPodium)
        
        
        console.log(totalPodium)

        return res.status(200).send({ success: true, message: totalPodium });
    }
}