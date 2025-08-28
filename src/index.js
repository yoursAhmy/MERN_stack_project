import  dotenv from "dotenv"
import connectDB from './db/index.js';
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log("server is running at port:", process.env.PORT);
    })
})
.catch((err) => {
    console.log("MobgoDB connnection failed",err );
    
})



 

// const app = express()
// ( async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_UR}/${MY_DB}`);
//         app.on("error", (err) =>{
//             console.log("error :", err)
//             throw err            
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port ${process.env.port}`);
            
//         })
//     }catch (err) {
//         console.log("error", err);
//         throw err
//     }
// })()