const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: "../.env" })
const app = express()

app.get("/", (req, res) => {
    return res.send("GET API")
})

app.listen(process.env.PORT, () => {
    console.log("Server running on http://localhost:3000")
})