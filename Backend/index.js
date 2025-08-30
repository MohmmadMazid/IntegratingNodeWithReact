const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
main()
  .then((res) => {
    console.log("mongodb connected successfully  \n");
  })
  .catch((err) => {
    console.log(
      "something went wrong during making connection with the database"
    );
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/mern_modular");
}

app.get("/demo", (req, res) => [
  res.json({
    name: "Mern stack appp",
    data: "my person data ",
    Why: "for personal learing purpose thatis whyi am learing the react js in this library other wise i would not love to learn this app beacouse peronally i dont like to lean or study all the things which i am learing from the inter net ",
  }),
]);

app.use("/api", userRoutes);
app.use("/api", postRoutes);

app.listen(port, () => {
  console.log("app is runing on port 5000");
});
