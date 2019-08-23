class UploadsController{
    upload(req, res){
        console.log(req.file)
        const path = `/images/${req.file.filename}`
        res.json({path})
    }
}


export default new UploadsController();