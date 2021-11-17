const Usuario = require('../models/Usuario');
module.exports={
  async ListarTodos( req,res){
  await Usuario.find({}).then((users)=>{
  return res.json({
      error:false,
      mensagem:"usuarios cadastrado",
      users
  });
}).catch((err)=>{
   return res.status(400).json({
       error:true,
       mensagem:"Nenhum usuario encontrado!"
   });
});
                 
        
   },
 async Listar_detalhes(req,res){
  await Usuario.findOne({_id: req.params.id}).then((usuario)=>{
    return res.json({
        Erro:false,
        mensagem:"usuário Encontrado:",
        usuario
    })   
    }).catch((err)=>{
        return res.status(400).json({
            error:true,
            mensagem:"Nenhum usuario encontrado!"
        });
    });
 },




    async Create(req,res){
    const {name,username,birthdate,address,addressNumber,phone,description} = req.body;
    //validaçoes dos campos
    if(!name){
      return res.json({
        mensagem:"Por favor preencha o campo Nome!"
      });   
    }

    if(!username){
      return res.json({
        mensagem:"Por favor preencha o campo username!"
      });   
    }

    if(!birthdate){
      return res.json({
        mensagem:"Por favor preencha o campo birthdate!"
      });  
    }
    if(!address){
      return res.json({
        mensagem:"Por favor preencha o campo address!"
      });  
    }
    if(!addressNumber){
      return res.json({
        mensagem:"Por favor preencha o campo addressNumber!"
      });  
    }
    if(!phone){
      return res.json({
        mensagem:"Por favor preencha o campo phone!"
      });  
    }
    if(!description){
      return res.json({
        mensagem:"Por favor preencha o campo description!"
      });  
    }  
   const user = await Usuario.create(req.body);
    if(user){
    return res.json({
       error:false,
       message:"Usuário cadastrado com sucesso!",
       usuario: user  
     }); 
    }else{
      return res.json({
        error:true,
        message:"Usuário não cadastrado com sucesso!",
        
      }); 
    }
   

    },
    async Atualizacao(req,res){
    const user = await Usuario.updateOne({_id: req.params.id}, req.body,(erro)=>{
      if(erro) return res.status(400).json({
        error:true,
        message:"Erro : na atualização do usuario! "+erro
      });
      return res.json({
        error:false,
        message:"Usuário Atualizado com sucesso!",
        user
      })
    }) 
    
     
   },
    async Delete(req,res){
      await Usuario.deleteOne({_id: req.params.id},(err)=>{
        if(err) return res.status(400).json({
            error:true,
            mensagem:"Erro: não foi possivel Deletar este Usuário"
        });
     
        return res.json({
            error:false,
            mensagem:"Usuário apagado com Sucesso!"
        });
    });
    }


}