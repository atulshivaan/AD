import express  from "express"
import bodyPraser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import clientRouter from "./routes/client.route.js"
import generalRouter from "./routes/general.route.js"
import managementRouter from "./routes/management.route.js"
import salesRouter from "./routes/sales.route.js"
import ConnectDb from "./config/db.config.js"

/*Configuration*/
const port = 5050;
dotenv.config();
const app= express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("dev"))

app.use(bodyPraser.json())
app.use(bodyPraser.urlencoded({extended:false}))
app.use(cors());


/*Routes*/
app.use("/client",clientRouter)
app.use("/general",generalRouter)
app.use("/managment" , managementRouter)
app.use("sales",salesRouter)


app.listen(port , (req,res)=>{
    ConnectDb();
    console.log(`server running on ${port}`);
    
})