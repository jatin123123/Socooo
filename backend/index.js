const express=require("express")
const app=express();
const dotenv=require("dotenv");
const cors=require("cors")
const allowedOrigins = [
  'https://socooo-jatin123123s-projects.vercel.app',
  'https://another-frontend-domain.com',
  'http://localhost:3000',
  'https://socooo.vercel.app/'// Local development environment
];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      // Allow requests with no origin (e.g., mobile apps, Postman)
      callback(null, true);
    } else {
      // Reject requests from untrusted origins
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,  // Allow cookies/tokens to be sent with the request
}));
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
