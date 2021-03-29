const Matter = require('../models/Matter')

module.exports = {
    async createMatter(req, res){

        const { title } = req.body

        if(!title ){
            return res.status(400).send({ success: false, message: 'Please fill in all fields' })
        }
        else{
   
            const newMatter = new Matter({ title })
            const savedMatter = await newMatter.save()
            return res.status(201).send({ success: true, Matter: savedMatter })
        }
            
    },

    async listMatter(req, res){
        const matters = await Matter.find()
        .populate('questions')
        .catch( err => { res.status(400).send({ success: false, message: err }) })
        
        return res.status(201).send({ success: true, matter: matters })
    }
}