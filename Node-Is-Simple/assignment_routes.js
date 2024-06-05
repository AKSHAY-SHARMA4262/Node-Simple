const fs = require("fs");

const resHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write(
      "<body><form action='/create/user' method='POST'><input type='text' name='userName' /><button type='submit'>SUBMIT</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users Page</title></head>");
    res.write(
      "<body><h1>Here are the dummy users list<br><ul><li>User-1</li><li>User-2</li><li>User-3</li><li>User-4</li><li>User-5</li></ul></h1></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create/user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const user = parseBody.split("=")[0];
      fs.writeFileSync("users.txt", user);/
      console.log(user);
    });
    res.statusCode = 200;
    res.setHeader("Location", "/");
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users Page</title></head>");
    res.write("<body><h1>User Is created</h1></body>");
    res.write("</html>");
    return res.end();
  }
};

module.exports = resHandler;
