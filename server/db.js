const mongoose= require('mongoose');
const db = "mongodb://127.0.0.1:27017/abc" 
// "mongodb+srv://username:admitpassword@cluster0.8swhukd.mongodb.net/?retryWrites=true&w=majority"
const connectToMongo = async ()=>{
const result= await mongoose.connect(db)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log("error : ", err));
}

module.exports = connectToMongo;