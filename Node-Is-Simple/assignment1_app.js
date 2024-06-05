const http = require("http");
const fs = require("fs");
const assignmentRoutes = require('./assignment_routes')

const server = http.createServer(assignmentRoutes);

server.listen(3000);
