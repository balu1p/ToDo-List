const express = require ("express");
const app = express();
const mongoose  = require ("mongoose");
const dotenv  = require ('dotenv');
const userRouter  = require ("./routes/user-routes.js");
const adminRouter  = require  ("./routes/admin-routes.js");
const movieRouter  = require  ("./routes/movie-routes.js");
const cors = require('cors')
dotenv.config();
const PORT=4500;

//middleware routes
app.use(express.json());
app.use("/user", userRouter); 
app.use("/admin", adminRouter); 
app.use("/movie", movieRouter);
app.use("/booking", bookingRouter);   

// ${process.env.MONGODB_PASSWORD}
mongoose.connect(`mongodb+srv://balu48:3uicjPIhODa1t9cN@movie-app.llc1gwx.mongodb.net/?retryWrites=true&w=majority`,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
    .then(() => 
        console.log("connected successfully")
)
    .catch((e) => console.log(e));

    app.listen(PORT,()=>{
        console.log(`SERVER RUNNING ON ${PORT}`);
    })