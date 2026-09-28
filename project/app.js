let http = require("http");
let fs =  require

let server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My Users App</title></head>");
    res.write("<body>");

    res.write("<h1>My User App</h1>");
    res.write("<h1>Insert user's data</h1>");
    res.write("<hr>");

    res.write("<form action='/submit-users' method='POST'>");

    res.write("User name: <input type='text' name='username' required>");
    res.write("<br><br>");

    res.write("Email: <input type='email' name='email' required>");
    res.write("<br><br>");

    res.write("Password: <input type='password' name='password' required>");
    res.write("<br><br>");

    res.write("Gender: ");
    res.write("<input type='radio' name='gender' value='male' required> Male");
    res.write("<input type='radio' name='gender' value='female'> Female");
    res.write("<input type='radio' name='gender' value='other'> Other");

    res.write("<br><br>");

    res.write("<input type='submit' value='Submit'>");

    res.write("</form>");

    res.write("</body>");
    res.write("</html>");

    
  }
  else if(req.url === '/submit-users' && req.method === 'POST'){
    fs.writeFileSync('resFile', 'Data submitted successfully..');

    res.statusCode=302;
    res.setHeader('Location', '/');
  }
});

let port = process.env.PORT || 3200;

server.listen(port, () => {
  console.log(`Your server started at http://localhost:${port}`);
});
