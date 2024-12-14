const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors=require("cors");

app.use(express.json());
app.use(cors());

const port = 3000;

app.post("/todo", async function (req, res) {
    let createPayLoad = req.body;

    // Unwrap the `data` property if it exists
    if (createPayLoad.data) {
        createPayLoad = createPayLoad.data;
    }

    // Validate the payload
    const parsePayLoad = createTodo.safeParse(createPayLoad);

    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "Message is not in the valid format",
        });
        return;
    }

    const { title, description } = parsePayLoad.data;

    await todo.create({
        title,
        description,
        completed: false,
    });

    res.json({
        msg: "Todo created",
    });
});

app.get("/todo", async function (req, res) {
    const todos = await todo.find({});  
    res.json({
        todos
    });
});

app.put("/completed", async function (req, res) {
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);

    if (!parsePayLoad.success) {
        res.status(411).json({
            "msg": "Something fishy in the task id"
        });
        return;
    }

    await todo.updateOne(
        { _id: req.body.id },  
        { completed: true }
    );

    res.json({
        "msg": "Todo marked as completed"
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
