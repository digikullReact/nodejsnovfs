require("dotenv").config(); //instantiating it
const express = require("express");
const app = express();
const { Sequelize, DataTypes, json } = require("sequelize");
const {encrypt,middleware2,middleware3} =require("./middlewares/common");

const port = process.env.PORT || 9090;
console.log(process.env.PORT);

app.use(express.json());
app.use(encrypt);

app.set("view engine", "ejs");

// Three ways to use a middleware
//1- Using it at app level
// 2- Route level ----
//3-- Router 

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

const Assignment = sequelize.define(
  "assignment",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    subject: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },

  },
  {
    // Other model options go here
  }
);

app.post("/api/create", middleware3,async (req, res) => {
  console.log(req.body);
  // You have to pass dynamic
  try {

   // const encryptedpass=await bcrypt.hash(req.body.password, 10);


    const subject = await Assignment.create({
      name: "Assignment 2",
      subject: "English",
    
    });

    // Want to encrypt the password

    res.json({ message: "Success", data: subject });
  } catch (err) {
    res.json({ message: "Error", data: err });
  }
});

// Update route

app.put("/api/update/:id", async (req, res) => {
  const data = await Assignment.update(
    { subject: "Golang" },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.json({ message: "Succes", data: data });
});

app.get("/api/getAll", async (req, res) => {
 // AUthorization//
 //  --->Logging 
 // Convert the password


  try {
    const subject = await Assignment.findAll();

    res.json({ message: "Success", data: subject });
  } catch (err) {
    res.json({ message: "Error", data: err });
  }
});


app.use(middleware2);


app.get("/api/getById/:id", async (req, res) => {
  try {
    const subject = await Assignment.findAll({
      where: {
        id: req.params.id,
      },
    });

    res.json({ message: "Success", data: subject });
  } catch (err) {
    res.json({ message: "Error", data: err });
  }
});
// update and delete --->


app.delete("/api/delete",async(req,res)=>{
  await Assignment.destroy({
    where: {
      id:2
     
    }

  });
  res.json({message:"Success"})

})

// Env file
connection().then((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log("Server Running");
    });
  } else {
    console.log(err);
  }
});



// Task ---->
// 1-  Create whole crud operation with template emgines ---->ejs --->display data
// 2- for rest you will have to create apis