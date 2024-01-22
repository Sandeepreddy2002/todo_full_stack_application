const express = require('express');
const jsonwebtoken = require('jsonwebtoken')
const app = express();
const {todoSchema,idSchema} = require('./type');
const todo = require('./db');
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.post('/todo',async (req,res) => {
       const createPayload = req.body;
       const parsePayload = todoSchema.safeParse(createPayload);
       console.log(createPayload)

       if(!parsePayload.success){
        return res.status(401).send({
            message:"Inputs are not valid"
        })
       }else{
         
        await  todo.create({
            title : createPayload.title,
            description : createPayload.description,
            completed : false
        })

        res.json({
            message:'todo created'
        })
       
       }
})

app.get('/todos', async (req, res)=>{
      const todos = await todo.find({});//todo.find() => it is also valid

      res.json(todos);
       
})

app.put("/completed", async (req,res)=>{
     const updatePayload = req.body;
     const parsedPayload = idSchema.safeParse(updatePayload);

     if(!parsedPayload.success){
       return res.status(411).send({
            message : 'Inputs are invalid'
        })
     }

     await todo.updateOne({
        _id: updatePayload.id
     },
     {
        completed : true
     })

     res.json({
        message:'todo marked as completed'
     })
})


app.listen(3000);