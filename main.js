const express = require("express");
const app = express();
const port = 3000;
const blog = require('./Routes/blog')

// ...

app.use('/blog', blog)
app.use(express.static("public"))

// middleware 1
app.use((req,res,next)=>{
    req.krish="Welcome Krish"
    console.log("1")
    next()
})
// middleware 2 
app.use((req,res,next)=>{
    console.log("2")
    next()
})
app.get("/", (req, res) => {
  res.send(req.krish)

});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
