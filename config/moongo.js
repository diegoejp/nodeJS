// here I create join with mongo
const mongoose = require("mongoose");
const dbUri = process.env.DB_URI;

const dataBaseConnect = () => {
    
  // mongoose.connect(dbUri,{
  //     useNewUrlParse : true,
  //     useUnifiedTopology : true,
  // },async (err, res) => {
  //     if(!err){
  //         console.log("Conexion correcta");
  //     } else {
  //         console.log("Error de conexion");
  //     }
  // });

  mongoose.connect(dbUri)
  .then(()=>{
    console.log("Connected to mongo Successful");
  })
  .catch((e)=>{
    console.log("Error : "+ e);
  })
};

module.exports = dataBaseConnect;