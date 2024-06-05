const Sequelize   = require('sequelize');

const sequelize = new Sequelize('localhost','root','root',{
    dialect: 'mysql',
    host: 'localhost',
});

sequelize.authenticate().then(()=>{
    console.log('Connection has been stablished successfully');
}).catch((err)=>{
    console.error("Can't connect to database: " , err);
})

module.exports = sequelize;