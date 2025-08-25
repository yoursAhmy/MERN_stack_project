import  dotenv from "dotenv"
import connectDB from './db/index.js';

dotenv.config({
    path: "./env"
})

connectDB();











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