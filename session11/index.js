// Server Preparation and Creation
// Since Node.js is already installed in our device, we can require the application by declaring a vraiable and requiring the said module

const http = require("http");

// Port creation
const port = 4000;

// Mock Database -> Array
let items = ["Laptop", "Phone"];
let users = ["John Doe", "Jane Doe"];

// Server creation via http/node
const app = http.createServer((request, response) => {

    // Endpoint Creation via Node Server
    // To access this endpoint we will be using localhost
    // localhost:4000/greeting
    // www.mylink.com/greeting
    if(request.url == "/greeting"){
        response.end("Hello World!");
    }else if(request.url == "/homepage"){
        response.end("Welcome to the homepage user");
    }else if(request.url == "/about"){
        response.writeHead(200);
        response.end("This is the about page!");
    }else if(request.url == "/items" && request.method == "GET"){
        response.writeHead(200);
        response.end(JSON.stringify(items));
    }else if(request.url == "/items/add" && request.method == "POST"){
        response.writeHead(201);
        items.push("Desktop");
        response.end("Item is now Added!");

        
    }else if(request.url == "/register" && request.method == "POST"){
            response.writeHead(201);
            users.push("Jm Garcia");
            response.end("User is Added")

    }else if(request.url == "/login" && request.method == "POST"){
        if(users.length == 0){
            response.writeHead(404)
            response.end("Page Not Found");
        }else{
            response.writeHead(200);
            response.end(JSON.stringify(users));
        }

    }else if(request.url == "/users/delete" && request.method == "DELETE"){
        if(users.length == 0){
            response.writeHead(204)
            response.end("No Content");
        }else{
            response.writeHead(200)
            users.pop();
            response.end("User Deleted");
        }

    }else{
        response.writeHead(404)
        response.end("Page Not Found");
    }
})



// Port listening
app.listen(port);

// Confirmation message
console.log(`Server is now running at port ${port}`);
