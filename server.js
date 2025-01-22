const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "pages")))
app.use(express.static(path.join(__dirname,"images")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/training.html", (req, res) => {
  res.sendFile("training.html");
});

app.get("/signup0.html", (req, res) => {
  res.sendFile("signup0.html");
});
app.get("/signup1.html", (req, res) => {
  res.sendFile("signup1.html");
});
app.get("/signup2.html", (req, res) => {
  res.sendFile("signup2.html");
});
app.post("/login", (req, res) => {
  res.redirect("success.html");
});


const port = 8080;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${port}`);
}
);
