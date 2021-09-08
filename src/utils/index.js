exports.addMovie = async (collection, dataObj) => {
    try{
        await collection.insertOne(dataObj)
    }catch (error){
        console.log(error);
    }
};

