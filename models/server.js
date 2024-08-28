const express = require ('express');
const dbConnect = require('../database/config')
require('../database/config')
const {getUser,postUser,putUser,deleteUser} = require('../controllers/UserController');
const {getPermision,postPermision,putPermision,deletePermision} = require('../controllers/PermisionController');
const {getGuide,postGuide,putGuide,deleteGuide} = require('../controllers/GuideController')


class Server {
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathUser = '/api/Users'
        this.pathPermision = '/api/Permisions'
        this.pathGuide = '/api/Guides'
        this.route()
    }

    async dbConnection(){
        await dbConnect
    }

    route(){
        this.app.use(express.json())
        this.app.post(this.pathUser, postUser)
        this.app.get(this.pathUser, getUser)
        this.app.put(this.pathUser, putUser)
        this.app.delete(this.pathUser, deleteUser)
        this.app.post(this.pathPermision, postPermision)
        this.app.get(this.pathPermision, getPermision)
        this.app.put(this.pathPermision, putPermision)
        this.app.delete(this.pathPermision, deletePermision)
        this.app.post(this.pathGuide, postGuide)
        this.app.get(this.pathGuide, getGuide)
        this.app.put(this.pathGuide, putGuide)
        this.app.delete(this.pathGuide, deleteGuide)
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log('Server is running')
        })
    }
}

module.exports = Server;