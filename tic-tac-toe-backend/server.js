const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

const port = 3030;

app.get("/api/v1/records", async (req, res) => {
  await fs.readFile("winnersBoard.json", (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
    res.send(data);
  });
});

app.post("/api/v1/records", async (req, res) => {
  await fs.readFile("winnersBoard.json", (err, data) => {
    data = JSON.parse(data);
    data.push(req.body);
    data = JSON.stringify(data);
    fs.writeFile("winnersBoard.json", data, (err) => {
      if (err) throw err;
      console.log("Winner Board Updated with new Winner");
      res.send("Winner Board Updated with new Winner");
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
