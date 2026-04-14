const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

const route = require("./Routes/allRoutes")

dotenv.config();
const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));

app.use(cookieParser());

app.use(express.json());


app.use("/", route);

const PORT = process.env.PORT || 3000;
const Mongo_Url = process.env.MONGO_URL;

mongoose.connect(Mongo_Url)
        .then(()=> {
            console.log("DB connected.");
            app.listen(PORT, ()=> {
                console.log(`Server is listening on the port: ${PORT}`);
            })
        })






// app.get("/", (req,res) => {
//     res.send("hello!")
// })