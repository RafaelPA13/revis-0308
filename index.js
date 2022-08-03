/* configurações do servidor */
//carregar o módulo express
const express = require('express')
//executar o módulo express
const app = express()
//definir a pasta dos arquivos ejs
app.set('views','./')
//criar uma instancia local
app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})
/* configurações do servidor - fim */ 

/* configuração par o banco de dados - início */ 
//importar o módulo mongoose
const mongoose = require('mongoose')
//configurar o scrtipt de consexão
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevis:revisao@fiaptecnico.n7tnr.mongodb.net/revisao?retryWrites=true&w=majority')
}

//configurar modelo para a coleção alunos
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String
})
//definir modelo para coleção alunos
const alunos = mongoose.model('alunos',modelo)
/* configuração do banco de dados - fim */

/* rota para a requisição */
app.get('/', async(req,res)=>{
    conexao()
    //pesquisar os documentos na collection alunos
    const resultado = await alunos.find()
    console.log(resultado)
    //res.send('index.ejs')
    res.render('index.ejs',{resultado})
})