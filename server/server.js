const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const connectDb = require('./config/db');
const PatientRegistrationAdmissionRoutes = require('./routes/PatientRegistrationAdmission')
const app = express();

connectDb();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", PatientRegistrationAdmissionRoutes);

app.get('/',(req,res)=>{
    res.send('hello, world!')
})

const port = 1000;

app.listen(port, ()=>{
    console.log(`server is running on a port ${port}`)
})