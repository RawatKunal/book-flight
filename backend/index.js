const express = require("express")
const app = express()
const port = 5000
const db = require("./config/db")
var cors = require('cors')
const adminroutes = require("./routes/adminRoutes")
const userroutes = require("./routes/userRoutes")

const seeder = require("./config/seeder")

app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use("/admin", adminroutes)
app.use("/user", userroutes)

seeder.insertuser()
app.listen(port, () => {
    console.log("Server running at port" + port)
})