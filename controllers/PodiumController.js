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

        // console.log(allPlayerPoints)
        const fistPosition = allPlayerPoints.filter((item) => { return item.playerScore <= 1800 && item.playerScore >= 1500})
        const secondPosition = allPlayerPoints.filter((item) => { return item.playerScore <= 1500 && item.playerScore >= 1200})
        const thierdPosition = allPlayerPoints.filter((item) => { return item.playerScore <= 900 && item.playerScore >= 600})
        // const filtered = Math.max.apply(Math, allPlayerPoints.map( (item) => { return item.totalScore }))
        totalPodium.push( fistPosition[0], secondPosition[0], thierdPosition[0])
        // const newList = allPlayerPoints.sort()
        

        return res.status(200).send({ success: true, message: totalPodium });
    }
}