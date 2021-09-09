exports.addMovie = async (collection, dataObj) => {
    try{
        await collection.insertOne(dataObj)
    }catch (error){
        console.log(error);
    }
};

exports.listMovies = async (collection) => {
    const list = await collection.find({}).toArray();
    console.log(list);
};



exports.updateMovie = async (collection, updateObj) => {
    await collection.updateOne(
      { name: updateObj.filter },
      { $set: { like: updateObj.like } }
    );
  };
  
  exports.deleteMovie = async (collection, deleteObj) => {
    await collection.deleteOne({ name: deleteObj.filter });
  };

// exports.updateMovie = async (collection, dataObj)=>{
//     try{
//         await collection.insertOne(dataObj)
//     }catch (error){
//         console.log(error);
//     }

// }

// exports.updateMovie = (list, input) => {
//     const list = await collection.find({}).toArray();
//     console.log(list);
//     let updateMovie;
//     console.log(list)
//     list.map((movie, index) => {
//         if (movie.name === input) {
//             updateMovie = index;
//         }
//         let stringMovieList = JSON.stringify(list);
//         fs.writeFileSync('./db/storage.json', stringMovieList);
//         console.log(list)
//     });
   
// };