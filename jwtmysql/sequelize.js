require("dotenv").config();  // For reading env variables
const { Sequelize ,DataTypes} = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
 function SequelizeConnect() {

    // Database connection logic
  return new Promise((res, rej) => {
    sequelize
      .authenticate()
      .then((data) => {
        console.log("Connected With Db");

        res(data);
      })
      .catch((err) => {
        rej(err);
      });
  });
}


// Models Here


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
      image:{
        type: DataTypes.STRING,
      }
  
    },
    {
      // Other model options go here
    }
  );
  

module.exports ={
  SequelizeConnect,
  Assignment


} ;
