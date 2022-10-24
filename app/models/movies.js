import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: String, 
    number: String, 
    emailAddress: String,
    expertise: String,
    
}, {
    timestamps: true,
    collection: 'movies'
});

export default mongoose.model('Movies', MovieSchema);