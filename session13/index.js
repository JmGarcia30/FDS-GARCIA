const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

// DB Connections Settings
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "task_management" 
})

// DB Con Confirmation message
db.connect(err => {
    if(err){
        console.log("Error connecting in MySQL Database.");        
    }else{
        console.log("MySQL Database Connection is succesful!");
    }
})

// Get All Task
app.get("/tasks/all", (req, res) => {
    const sql = "SELECT * FROM tasks";

    db.query(sql, (err, result) => {
        if(err){
            res.send("ERROR: CAnnot retrieve all tasks.");
            return;
        }else{
            if(result.length <= 0){
                res.send("There are no tasks found.")
            }else{
                res.json(result);
            }
        }
    })
});


// Add new task
app.post("/tasks/create", (req, res) => {
    let{taskName, taskDescription, isActive, taskCreated, user_id} = req.body;

    const sql = `INSERT INTO tasks(taskName, taskDescription, isActive, taskCreated, taskCompleted, user_id) VALUES(?, ?, ?, ?, taskCompleted, ?)`;

    db.query(sql, [taskName, taskDescription, isActive = 1, taskCreated = new Date, user_id = 1], (err, result) => {
        if(err){
            res.send("ERROR: Cannor create task this time.");
            return;
        }else{
            res.send(`${taskName.toUpperCase()} is now added!`);
        }
    })
})


// Get specific task -> using task_id
app.get("/tasks/:taskId", (req, res) => {
    const id = req.params.taskId
    const sql = `SELECT * FROM tasks WHERE task_id = ${id}`

    db.query(sql, (err, result) => {
        if(err || result.length <= 0){
            res.send("ERROR: Cannot find task with the specified ID.")
            return;
        }else{
            res.json(result);
        }
    })
})

// Update task
app.put("/tasks/complete/:taskId", (req, res) => {
    const id = req.params.taskId
    const sql = `UPDATE tasks SET isActive = ? , taskCompleted = ? WHERE task_id = ${id}`

    db.query(sql, [isActive = 0, taskCompleted = new Date], (err, result) => {
        if(err || result.length <= 0){
            res.send("ERROR: Cannot complete the task or the task is not existing.")
            return;
        }else{
            res.send("SUCCESS: Task Completed")
        }
    })
})

// Delete Task
app.delete("/tasks/delete/:taskId", (req,res) => {
    const id = req.params.taskId;
    const sql = `DELETE FROM tasks WHERE task_id = ${id}`;

    db.query(sql, (err, result) => {
        if(err){
            res.send("ERROR: Cannot Delete Task.")
            return;
        }else{
            res.send("SUCCESS: Task Deleted!")
        }
    })
})




// Port Listening
app.listen(port, () => console.log(`Server is now up and running at port ${port}.`));