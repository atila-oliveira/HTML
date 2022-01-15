const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //depois que o formulário é enviado o bodyParser pega os dados e joga em um request

app.use(bodyParser.urlencoded({extended: true})) //urlencoded é um padrão de quando formulário é submetido

app.post('/usuarios', (req, resp) =>{
    console.log(req.body);
    resp.send("<h1>Parabéns!</h1>");
})

app.post('/usuarios/:id', (req, resp) =>{
    console.log(req.params.id);
    console.log(req.body);
    resp.send("<h1>Parabéns! Usuário alterado</h1>");
})

app.listen(3003)

//Recordar é viver:
//criar um arquivo js para configurar o servidor
// na pasta desse arquivo, fazer um npm init -y para criar o package.json
// usar npm i --save express body-parser para instalar as dependencias
//configurar, como o código de exemplo desse arquivo
//usar o node server.js para rodar o servidor.

//para não ter que ficar derrubando e levantando o servidor em cada alteração desse arquivo
//instalar o nodemon usando npm i --save-dev nodemon
//e passar a iniciar o servidor com o nodemon server.js
//se o arquivo estiver como main no package.json, basta rodar nodemon
//nodemon aconselhavel apenas para desenvolvimento