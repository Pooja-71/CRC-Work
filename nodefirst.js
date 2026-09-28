let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<head><title>My Website</title></head>");
  res.write("<body>");

  let menu = fs.readFileSync("menu.html");
  res.write(menu.toString());

  if (req.url === "/") {
    res.statusCode = 200;

    let data = fs.readFileSync("home.html");
    res.write(data.toString());

    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/about") {
    res.statusCode = 200;

    res.write("<h1>About Our Website</h1>");
    res.write("<p>Learn more about our website.</p>");
    res.write("<h2>About Us</h2>");

    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/contact") {
    res.statusCode = 200;

    res.write("<h1>Contact Information</h1>");
    res.write("<p>Get in touch with us.</p>");
    res.write("<h2>Email: web@gmail.com <br> Phone: 988677575</h2>");

    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;

    res.write("<h1>Page Not Found</h1>");
    res.write("<p>The requested page is not available.</p>");
    res.write("<h2>Error 404</h2>");

    res.write("</body>");
    res.write("</html>");
    res.end();
  }
});

let port = process.env.PORT || 3070;

server.listen(port, () => {
  console.log(`Your server started at http://localhost:${port}`);
});
