const mongoose= require('mongoose');

// "mongodb+srv://username:admitpassword@cluster0.8swhukd.mongodb.net/?retryWrites=true&w=majority"
const connectToMongo = async ()=>{
const result= await mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log("error : ", err));
}

module.exports = connectToMongo;