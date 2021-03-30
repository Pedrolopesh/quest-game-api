const Player = require('../models/Player')

module.exports = {
    async createPlayer(req, res){

        console.log(req.body)
        const { nickname, email } = req.body
        if(!nickname || !email){
            res.status(400).send({ success: false, message: 'Please fill in all fields' })
        }

        const player = await Player.findOne({ email:email })

            if(player) res.status(200).send({ success:false, message:"User Alredy exist", player: player})
            
        
            else{

                const newPlayer = new Player({
                    nickname,
                    email,
                    status:"active",
                    totalScore:0
                })
                
                const savedPlayer = await newPlayer.save()
                
                res.status(201).send({ success: true, player: savedPlayer })
            }
        },

        async getPlayerData(req, res){
            const id = req.params.id;
            const player = await Player.findById(id).catch(err => { return res.status(400).send({ success: false, message: 'Error on find player', err:err }) })
            if(!player) return res.status(201).send({ success: true, message:'Player not found' })
            return res.status(201).send({ success: true, player: player });
        }
    }