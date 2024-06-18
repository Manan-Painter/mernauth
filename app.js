const express = require("express")
const collection = ("./mongo")
const cors =require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



app.post("/",async(req,res) => {
    const{email,password}=req.body

    const data={
        emial:email,
        password:password
    }

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }else{
            res.json("not exist")
            await collection.insertMany([data])
        }

    } catch (e) {
        res.json("not exist")
    }
})

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    emial: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("not exist");
  }
});

app.listen(8000,()=>{
    console.log("port connected")
})
