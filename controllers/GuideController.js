const Guide = require('../models/Guide')

const getGuide = async  (req, res)=>{
    const Guides = await Guide.find()

    res.json(Guides)
}

const postGuide = async (req,res)=>{
    let msg = 'Guide inserted successfully'
    const body = req.body

    try{
        const guide = new Guide(body)
        await guide.save()

    }
    catch (error){
        msg = error
    }

    res.json({msg:msg})
}


const putGuide= async (req, res)=>{
    let msg = 'Guide updated'
    const {Id, Nit, Name, Last_Name, Email, Cellphone, State } = req.body
    try {
        await findOneAndUpdate({Id:Id}, {Nit:Nit , Name:Name, Email:Email, Last_Name:Last_Name, Cellphone:Cellphone, State:State})
    }catch (error){
        msg = error
    }
    res.json({msg:msg})
}

const deleteGuide = async (req,res)=>{
    let msg = 'Guide deleted'
    id = req.params.id
    try {
        await findOneAndDelete({_id:id})
    }catch (error){
        msg = 'There was an error deleting the Guide'
    }
    res.json({msg:msg})
}


module.exports = {
    postGuide,
    getGuide,
    putGuide,
    deleteGuide
}