const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/word", async (req, res) => {
    
    try {
     
      res.json({ status: "ok" , data:response});
    } catch (err) {
      console.log(err)
      res.json({ status: "error", error: err });
    }
  });

app.listen(8080,() => {
 console.log("server started at port 8080");
  });
  