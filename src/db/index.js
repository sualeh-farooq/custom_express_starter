const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL
const db =  async () =>{
    try {
        const cons = await mongoose.connect(MONGODB_URL)
        console.log(`mongodb connected : ${con.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}
module.exports = db