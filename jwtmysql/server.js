
// all config of my database and the server 
const app = require("./app");
const port = process.env.PORT || 9090;

const {SequelizeConnect} = require("./sequelize");

SequelizeConnect()
  .then((data) => {
    app.listen(port, () => {
      console.info(`Server Running at Port ${port}`);
    });
  })
  .catch((Err) => {
    console.error(Err);
  });
