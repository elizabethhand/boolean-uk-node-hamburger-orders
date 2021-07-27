const express = require("express")
const morgan = require("express")
const burgerRouter = require("./src/resources/burgerRouter")
// const toursRouter = express.Router()

const app = express()

app.use(morgan("dev"))
app.use(express.json())
// app.use("/breweries", breweriesRouters)

app.get("/hamburgers", burgerRouter)

app.listen(3000, () => {
    console.log("Port running")
})