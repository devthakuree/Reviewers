import express from "express"
// import todoRouter from './routes/todos.routes'
import userRouter from './routes/user.route'
import restroRouter from './routes/restaurant.route'
import contactRouter from './routes/contact.route'
import reviewsRouter from './routes/review.route'
import { genericErrorHandler } from './middlewares/errors.middleware'
import cors from "cors";
const PORT = 3000;
const app = express() 
app.use(express.json())
app.use(cors())
app.use('/restros', restroRouter)
app.use('/users', userRouter)
app.use('/contacts',contactRouter)
app.use('/reviews',reviewsRouter)

app.listen(PORT, ()=>{
    console.log('Runnig on port',PORT)
});
app.use(genericErrorHandler)

export default app;