const express = require("express"),
      app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "src/pages" });
});

app.get("/training.html", (req, res) => {
  res.sendFile("training.html", { root: "src/pages" });
});

app.get("/signup0.html", (req, res) => {
  res.sendFile("signup0.html", { root: "src/pages" });
});
app.get("/signup1.html", (req, res) => {
  res.sendFile("signup1.html", { root: "src/pages" });
});

app.get("/signup2.html", (req, res) => {
  res.sendFile("signup2.html", { root: "src/pages" });
});


app.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);
