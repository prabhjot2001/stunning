import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true)
    mongoose.connect(url)
    .then(() => console.log('mongodb connected'))
    .catch((e) => console.log(e))

}

export default connectDB;