import express from "express";
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users");
app.get("/", (req, res) => {
  res.json({
    msg: "data",
  });
});

app.listen(PORT, () => {
  console.log(`App is listening ${PORT}`);
});
