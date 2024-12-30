const express=require("express")
const app=express();
const dotenv=require("dotenv");
const cors=require("cors")
app.use(cors({
    origin: 'http://localhost:3000', // The frontend URL
    credentials: true,               // Allow credentials (cookies, tokens)
 } ));
dotenv.config();

const db=require("./config/db");
// Importing Routes
const authRouter=require("./routers/auth");
const postRouter=require("./routers/Post");
const AdminRouter=require("./routers/admin");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// implimanting routes
app.use(express.json());
app.use("/api",authRouter);
app.use("/api",postRouter);
app.use('/api',AdminRouter);
db();
const PORT=process.env.PORT || 4100;
app.listen(PORT,()=>console.log(`App is Runing on LocalHost : ${PORT}`));