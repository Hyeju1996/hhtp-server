"use strict"
import http from "http";

//DONE: set host and port as varibles

const host = "localhost";
const port = 3000;

// DONE: Extract server message into it's own function
const serverMessageListner = (req , res) => {
    res.writeHead(200);
    //Render data
    res.end ("This is better server code running!!!");
;}

//DONE: create a server
const server = http.createServer((request,response) => {
    response.writeHead(200);
    //Render data
    response.end("This is a running server!");

const htmlMessageListner = (req, res) => {
    //set the header
     res.writeHead (200);
     // send it some html
     res.end("<html><h1>Hello-world!</h1></html>");
     //DONE: create a simple server
     // const server = http.createServer
}
})

//DONE set the server t listen
server.listen(3000, "localhost", () => {
    console.log(`server is running on http://l${host}: ${port}`);
})