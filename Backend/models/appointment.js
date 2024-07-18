
import mongoose from 'mongoose';


const AppointmentSchema = mongoose.Schema({  //creating Schema for appointment
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },

    Phone: {
        type: Number,
        required: true
    },
    Doctor: {
        type: String,
        required: true
    },


    date: {
        type: String,
        required: true

    },
    Time:{
        type: Date, 
        default: Date.now
    }
}
);

export const Appointment = mongoose.model('Appointment', AppointmentSchema)