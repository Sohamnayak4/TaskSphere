import mongoose, { model } from "mongoose";

mongoose.connect("mongodb+srv://sohamnayak06:l4IXl8sck0FiZlBl@cluster0.dvuh9te.mongodb.net/todoapp")

const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model("todos", todosSchema);

export { todo };