const Podium = require('../models/Podium')
const Player = require('../models/Player')


module.exports = {
    async createPodium(req, res){

        const allPlayers = await Player.find();
        const allPlayerPoints = []
        const totalPodium = []
        const totalPoints = []

        const auxArryCalcSecondPodium = []
        const auxArryCalcThierdPodium = []

        for(let i = 0; i < allPlayers.length; i++){
            allPlayerPoints.push({playerNickname: allPlayers[i].nickname, playerScore:allPlayers[i].totalScore})
            totalPoints.push(parseInt(allPlayers[i].totalScore))

            auxArryCalcSecondPodium.push(parseInt(allPlayers[i].totalScore))
            auxArryCalcThierdPodium.push(parseInt(allPlayers[i].totalScore))
        }

        var max = Math.max(...totalPoints)

        auxArryCalcSecondPodium.splice(auxArryCalcSecondPodium.indexOf(max), 1);
        let secondMax = Math.max.apply(null, auxArryCalcSecondPodium);

        findThirdMax = (arr) => {
            let [first, second, third] = [-Infinity, -Infinity, -Infinity];
            for (let el of arr) {
                if (el === first || el === second || el === third) {
                    continue; };
                    if (el > first) {
                        [first, second, third] = [el, first, second]; continue; };
                        if (el > second) {
                        [second, third] = [el, second]; continue;
                    };
                    if (el > third) {
                        third = el; continue;
                    };
            };
            return third !== -Infinity ? third : first;
        };

        let thierdMax = findThirdMax(auxArryCalcThierdPodium)

        const fistPosition = allPlayerPoints.filter((item) => { return item.playerScore === max })
        const secondPosition = allPlayerPoints.filter((item) => { return item.playerScore === secondMax })
        const thierdPosition = allPlayerPoints.filter((item) => { return item.playerScore === thierdMax })

        // const filtered = Math.max.apply(Math, allPlayerPoints.map( (item) => { return item.totalScore }))
        // const newList = allPlayerPoints.sort()


        console.log(thierdPosition)

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
        return res.status(200).send({ success: true, message: totalPodium });
    },
}