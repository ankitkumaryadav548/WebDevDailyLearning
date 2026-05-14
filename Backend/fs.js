//read data from file 
const fs = require('fs')
fs.readFile("file.txt",utf8,(err,data)=>
{
    if(err)
    {
        console.log(err)
        return 
    }
    console.log(data)
})

//write data to file 
const fs = require('fs')

fs.writeFile(file.txt,"this is new file",(err)=>
{
    if(err){
        console.log(err)
        return 
    }
    console.log("File successfully written")
})

//append data to file 
const fs = require("fs");

fs.appendFile(
    "output.txt",
    "\nNew Line Added",

    (err) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log("Data Appended");
    }
);


const fs = require('fs')
fs.readFile("test.txr", utf8,(err,data)=>
{
    if(err){
        console.log(err)
        return 
    }
    console.log("read the data")
})

