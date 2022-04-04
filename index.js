//npm install express
//npm --save-dev install nodemon
// npm start (comando para iniciar a aplicaçao)
//npm install consign ()

const customExpress = require("./config/customExpress")

const app = customExpress()

app.listen(3000,() => console.log('servidor ativo na porta 3000'))


