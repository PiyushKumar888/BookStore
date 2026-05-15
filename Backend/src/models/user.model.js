import mongoose from "mongoose";
import bcrypt from "bcrypt";


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    verified:{
        type: Boolean,
        default: false,
    }


}, { timestamps: true });

UserSchema.pre('save', async function (){
    if (!this.isModified('password'))   return
    this.password = await bcrypt.hash(this.password, 12);

})

UserSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}

export const User = mongoose.model('User',UserSchema);