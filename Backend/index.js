import express, { response } from "express";
import mongoose from "mongoose";
import { MongoUrl } from "./config.js";
import { Appointment } from "./models/appointment.js";
const app = express();
const port = 5000;
app.use(express.json());

mongoose.connect(MongoUrl)
    .then(() => {
        console.log("Connected");
        app.get('/', (req, res) => {
            res.send('Hello World!')
        })
    })
    .catch((error) => {
        console.log(error);
    })


app.post('/appointment', async(req, res) => {
    try {
        if(!req.body.Name || !req.body.Email ||!req.body.Phone ||!req.body.Doctor ||!req.body.Time ){
            return res.status(400).send(
                {
                    message:"Send all fields"
                }
            )
        }

        const NewAppointment={
            Name:req.body.Name,
            Email:req.body.Email,
            Phone:req.body.Phone,
            Doctor:req.body.Doctor,
            date:req.body.date
        };

        const appointment = await Appointment.create(NewAppointment);
        return res.status(201).send(appointment);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}) 