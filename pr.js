/** @format */

"use strict";

const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/home") {
    response.write(`<h1>Welcome to the home page of TechMech.com</h1>`);
    response.end();
    return;
  }
  if (request.url === "/about") {
    response.write("<h1>This is our short history</h1>");
    response.end();
    return;
  }
  response.end(`<h1>OOPS! Page can't be found!</h1>
  <a href="/home">Go back to home</a>`);
});

server.listen(5500);

const _ = require("lodash");

const arr = [1, [2, [3, [4]]]];

const arrNew = _.flattenDeep(arr);
console.log(arrNew);

console.log("hello world");
console.log("hello people");
console.log("hello people");
