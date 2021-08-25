import { Server } from "./bootstrap";
import config from './config'

console.log("Hi from server");

const server = new Server(config);
server.start()