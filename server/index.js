import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'; 


import postRoutes from './routes/postRoutes.js'
import delleRoutes from './routes/delleRoutes.js'

dotenv.config();

const app = express();

// Using middleWare here 
app.use(cors())
app.use(express.json({limit : '50mb'}))
//defining the routes, so that we hook it up with the front end
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/delle', delleRoutes)



app.get('/', async (req, res)=>{
     res.send('Hello from backend developer "The Prabhjot 👋"')
})


const startServer = () => {

    try{
     connectDB(process.env.MONGODB_URL)
     app.listen(8080, () => console.log('server has started on port http://localhost:8080'))
    }
    catch(err){
    console.log(err)
    }
}

startServer();