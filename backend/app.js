const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

const route = require("./Routes/allRoutes")

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const Mongo_Url = process.env.MONGO_URL;

mongoose.connect(Mongo_Url)
        .then(()=> {
            console.log("DB connected.");
            app.listen(PORT, ()=> {
                console.log(`Server is listening on the port: ${PORT}`);
            })
        })


app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));
// app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());

app.use("/", route);

// app.get("/", (req,res) => {
//     res.send("hello!")
// })