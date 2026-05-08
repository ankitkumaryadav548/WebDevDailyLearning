import express from 'express';

const SECRET = "key123"
const app = express();


app.post("/login",(req,res)=>{
    const { username,password } = req.body;
    if(username==="admin" && password==="1234"){
        const token = jwt.sign({user: username},SECRET, {expiresIn:"1m"});
        return res.send(token);
    }
    res.send("invalid cred");
})
//verify
app.get("/home",(req,res)=>{
    const authHeader = authHeader.split("")[1];
    jwt.verify(token, SECRET, (err)=>{
        if(err){
            return res.send("invalid token");
        }
        res.send("WELCOME TO HOME");
    });
});



app.listen(3000, ()=>{
    console.log("server started");
});