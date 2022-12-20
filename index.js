const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json("hi")
})

app.get("/word",  (req, res) => {
    
    try {
        let words = ['Nish', 'Hello', 'acha' , "ok"];
        let word = words[Math.floor(Math.random()*words.length)];
        res.json({ status: "ok" , data:word});

    } catch (err) {
      console.log(err)
      res.json({ status: "error", error: err });
    }
  });
  app.post("/user",  (req, res) => {
    
    try {
        let name=req.body.name;
        let difficulty= req.body.difficulty;
        let score = req.body.score;

        res.json({ status: "ok" , data:{
            name,difficulty,score
        }});

    } catch (err) {
      console.log(err)
      res.json({ status: "error", error: err });
    }
  });

app.listen(8080,() => {
 console.log("server started at port 8080");
  });
  