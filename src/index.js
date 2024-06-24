import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
})

app.use('/api', userRoutes)

const port = process.env.PORT || 3000
app.listen(port)
console.log('Listening', port)