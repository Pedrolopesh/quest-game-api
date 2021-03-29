const Player = require('../models/Player')

module.exports = {
    async createPlayer(req, res){

        console.log(req.body)
        const { nickname, email } = req.body
        if(!nickname || !email){
            res.status(400).send({ success: false, message: 'Please fill in all fields' })
        }

        const player = await Player.findOne({ email:email })

            if(player){
                res.status(200).send({ success:false, message:"User Alredy exist", registeredUser: player})
            }
        
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
        }
    }