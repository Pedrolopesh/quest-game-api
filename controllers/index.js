module.exports = {
    async getSeverStatus(req, res){
        return res.status(200).send({ success: true, message: 'sever is runing'})
    }
}