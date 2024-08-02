
import express from 'express';
import * as todoServices from '../services/todo_service.js'
var router = express.Router();

/* GET home page. */
router.get('/:id', async function(req, res, next) {
  const id = req.params.id;
  const todo = await todoServices.getTodoById(id)
  if(todo){
     return res.status(200).json({data: todo})
  }
  else{
    return res.status(404).json({message: 'id not found'})
  }
  
});

router.get('/', async function(req, res, next) {
    const todos = await todoServices.getAllTodos();
    res.status(200).json({data: todos})
    

  });

  router.post('/', async function(req, res, next) {
    
    const data = req.body;
    const todo =  await todoServices.addTodo(data)
    console.log(data)
    res.status(201).json({message: 'New to do created sucessfully!', data: todo})
  });

  router.put('/:id', async function(req, res, next) {
    try{
        const id = req.params.id;
        const data = req.body
        const todo = await todoServices.updataTodo(id, data);
        res.status(200).json({message: 'New to do is updated sucessfully', data: todo})
    }catch(error){
        res.status(405).json({message: error.message})
    }
    
  });

  router.delete('/:id', async function(req, res, next) {
    try{
         const id = req.params.id;
         console.log(id)
         const todo = await todoServices.deleteTodo(id)
         res.status(200).json({message: 'Todo has been deleted'});
    }
    catch(error){
        res.status(405).json({message: error.message})
    }
    
  });
export default router
