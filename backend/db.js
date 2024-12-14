const mongoose=require("mongoose");
const types = require("./types");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://jayanthyadavhm44:aoWtqpu5f8u0ZvP5@cluster00.cobzj.mongodb.net/todos");

const todoSchema=mongoose.Schema(
    {
    title:String,
    
    description:String,
    
    completed:{
        type:Boolean,
        default:false
    }
})

const todo=mongoose.model('todos',todoSchema)

module.exports= {
    todo
}