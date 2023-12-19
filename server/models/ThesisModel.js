const mongoose = require('mongoose');

const thesisSchema = new mongoose.Schema({
        title:{
        type: String, required :true,
    },
    file: [{type: mongoose.Schema.Types.ObjectId, ref:'FileThesis'}],
    description: String,
    created_time: Date,
    pending: Boolean, 

    professor: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    creator_student: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
}); 

module.exports = mongoose.model('Thesis', thesisSchema, 'Thesis');