import express from 'express';
import mongo  from "libs/mongo";

const app = express();
const http = require('http').Server(app);





const PORT = process.env.PORT|| 3000;
var listener=http.listen(PORT, () => {
	console.log("Server, listening on port", PORT, listener.address()); })


