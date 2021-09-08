const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI)

const connection = async (crudFunc, dataObj) => {
    try{
    await client.connect();
    const db = client.db("movies");

    const collection = db.collection("movie");
    await collection.insertOne({name: "Adam"});

    // await crudFunc(collection, dataObj)
    client.close();
} catch (error){
    console.log(error);
}
};
connection();

module.export = connection;