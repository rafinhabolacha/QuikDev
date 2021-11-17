const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Usuario', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
   console.log('conexão com mongodb realizada com sucesso!')
  }).catch((erro)=>{
    console.log('Error: com mongodb não foi realizada com sucesso!')
  });