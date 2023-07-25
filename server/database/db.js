import mongoose from "mongoose";


 const connection = async (username,password) => {
    const URL =`mongodb+srv://${username}:${password}@blog-app.re35de7.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useNewurlparser: true});
       console.log('Db Connected succesfully');
    } catch (error) {
        console.log('Error while connectin db',error);
    }
}

export default connection;