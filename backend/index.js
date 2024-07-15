import express from 'express';
import { createTodo,updateTodo } from './types.js';
import { todo } from './db.js';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/test', (req, res) => {
    res.send('Test');
});


app.post('/todos', async (req, res) => {
    const createPatyLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPatyLoad);
    if (!parsePayLoad.success) {
        res.status(400).json({ msg: "Worng Inputs" });
        return;
    }
    // put in mongoDB
    await todo.create({
        title:createPatyLoad.title,
        description:createPatyLoad.description,
        completed:false,
    })
    res.json({msg:"Todo Created"});
});

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json(todos);
});

app.put('/completes' , async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(400).json({ msg: "Worng Inputs" });
        return;
    }
    await todo.updateOne({
        _id:updatePayload.id
    },{
        completed:true
    })
    res.json({msg:"Todo Updated"});
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});