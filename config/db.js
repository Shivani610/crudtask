const mongoose = require("mongoose")
require("colors")
const db = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URL)
        console.log("Db Connected".bgGreen);
    } catch (error) {
        console.log(`Unable to Connected ${error}`);
        process.exit() // stop the Server

    }
}
module.exports = db