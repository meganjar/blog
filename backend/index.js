import express from 'express'; 
import cors from 'cors'
import 'dotenv/config'
import connectDB from './db.js';
import postRoutes from './routes/postRoutes.js'


// 2 create app
const app = express();
const port = 8080
app.use(cors())
app.use(express.json()) // <--- if we want to handle a post request
// call connection function
// listen on a specific port

app.use("/posts",postRoutes)
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
connectDB()
})


