require("dotenv").config();//instantiating it 
const express = require("express");
const app = express();
const { Sequelize,DataTypes, json } = require("sequelize");

const port = process.env.PORT || 9090;
console.log(process.env.PORT);

app.use(express.json());
app.set("view engine", "ejs");

/**
 * Sequelize connection
 */

 const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.MYSQLUSERNAME,
    process.env.MYSQLPASSWORD,
    {
      host: "localhost",
      dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    }
  );
async function connection() {


  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return null;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return error;
  }
}

const Assignment = sequelize.define('assignment', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    subject: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });

  app.post("/api/create",async(req,res)=>{

    // You have to pass dynamic     
      try{
        const subject = await Assignment.create({ name: "Assignment 2", subject: "English" });

        res.json({message:"Success",data:subject})
      }
      catch(err){

        res.json({message:"Error",data:err})

      }


  })

  app.get("/api/getAll",async(req,res)=>{
    try{
      const subject = await Assignment.findAll();
      

      res.json({message:"Success",data:subject})
    }
    catch(err){

      res.json({message:"Error",data:err})

    }


})
// update and delete --->


// Env file
connection().then(err=>{
    if(!err){
        app.listen(port, () => {
            console.log("Server Running");
          });

    }
    else{
        console.log(err);
    }

})


