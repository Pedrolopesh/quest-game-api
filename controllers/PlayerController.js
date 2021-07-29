const Player = require('../models/Player');
const nodemailer = require('nodemailer');

module.exports = {
    async createPlayer(req, res){

        console.log(req.body)
        const { nickname, email } = req.body
        if(!nickname || !email){
            return res.status(400).send({ success: false, message: 'Please fill in all fields' })
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
            if(!player) return res.status(201).send({ success: false, message:'Player not found' })
            return res.status(201).send({ success: true, player: player });
    },

    async requestConfirmPlayer(req, res){
        const { nickname, email } = req.body
        if(!nickname || !email) return res.status(400).send({ success: false, message: 'Please fill in all fields' })

        const player = await Player.findOne({ email:email })
        if(!player) return res.status(201).send({ success: false, message:'Player not found' })

        randomIndex = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

        await Player.findByIdAndUpdate(player._id,{
            $set:{
                confirmCode: randomIndex
            }
        }).catch(err => { console.log(err); return res.status(201).send({ success: false, error: err })})

        const output = `
            <div>
                <h3>PIN: ${randomIndex}</h3>
            </div>
        `

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'publicsenderemail@gmail.com',
                pass: 'teste12345@'
            }
        });

        var mailOptions = {
            from: 'publicsenderemail@gmail.com',
            to: req.body.email,
            subject: '[QUIZZZ CONFIRMAR]',
            html: output
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);

            return res.send({
                success: false,
                message: 'Erro ao enviar email'
            })

        } else {
            console.log('info:' + info.response);
            return res.send({
                success: true,
                message: 'Email enviado para ' + req.body.email,
                info: info
            })
        }
       });
    },

    async confirmPlayerCode(req, res){
        const { code, email } = req.body
        console.log()

        if(!code || !email) return res.status(400).send({ success: false, message: 'Please fill in all fields' })

        const player = await Player.findOne({ email:email })
        if(!player) return res.status(404).send({ success: false, message:'Player not found' })

        if(code === player.confirmCode){
            return res.status(200).send({ success: true, message:'corrent_pin', player: player })
        }else{
            return res.status(404).send({ success: false, message:'wrong_pin' })
        }

    }
}