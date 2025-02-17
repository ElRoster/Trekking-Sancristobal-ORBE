const User = require('../models/User')


const getUser = async (req,res)=>{
    const users = await User.find()

    res.json(users)
}

const postUser = async (req,res)=>{
    let msg = 'User inserted successfully'
    const body = req.body

    try{
        const user = new User(body)
        await user.save()

    }
    catch (error){
        msg = error
    }

    res.json({msg:msg})
}

const putUser= async (req, res)=>{
    let msg = 'Guide updated'
    const {Id, User_Name, Email, } = req.body
    try {
        await findOneAndUpdate({Id:Id}, {User_Name:User_Name, Email:Email})
    }catch (error){
        msg = error
    }
    res.json({msg:msg})
}

const deleteUser = async (req,res)=>{
    let msg = 'Guide deleted'
    id = req.params.id
    try {
        await findOneAndDelete({_id:id})
    }catch (error){
        msg = 'There was an error deleting the User'
    }
    res.json({msg:msg})
}

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}
