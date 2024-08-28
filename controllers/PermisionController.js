const Permision = require('../models/Permision')


const getPermision = async (req,res)=>{
    const Permisions = await Permision.find()

    res.json(Permisions)
}

const postPermision = async (req,res)=>{
    let msg = 'Permision inserted successfully'
    const body = req.body

    try{
        const permision = new Permision(body)
        await permision.save()

    }
    catch (error){
        msg = error
    }

    res.json({msg:msg})
}

const putPermision= async (req, res)=>{
    let msg = 'Permision updated'
    const {Id, Name, Description, State } = req.body
    try {
        await findOneAndUpdate({Id:Id}, { Name:Name, Description:Description, State:State})
    }catch (error){
        msg = error
    }
    res.json({msg:msg})
}

const deletePermision = async (req,res)=>{
    let msg = 'Permision deleted'
    id = req.params.id
    try {
        await findOneAndDelete({_id:id})
    }catch (error){
        msg = 'There was an error deleting the Permision'
    }
    res.json({msg:msg})
}

module.exports = {
    postPermision,
    getPermision,
    putPermision,
    deletePermision
}