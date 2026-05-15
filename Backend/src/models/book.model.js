import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        default: 0
    },
    category:{
        type: String,
    },
    image:{
        type: String,
        required: true,
    }

},{timestamps: true});

export const Book = mongoose.model('Book',bookSchema);

