const express = require("express");
const path = require("path");
const exphbd = require("express-handlebars");

const homeRoutes = require("./routes/home");
const coursesRoutes = require("./routes/courses");
const addRoutes = require("./routes/add");

const app = express();

const PORT = process.env.PORT || 3000;

// handlebars
const hbs = exphbd.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", homeRoutes);
app.use("/courses", coursesRoutes);
app.use("/add", addRoutes);

app.listen(PORT, () => {
  console.log("server started on port:", PORT);
});
