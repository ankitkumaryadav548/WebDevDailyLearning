import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/classwork")

const productSchema = new mongoose.Schema({
    name:String,
    price:Number
});

const saveInDB = async ()=>
{
    const Product = mongoose.model('products',productSchema)

    const products = [
       {name:"Phone",price:10000},
       {name:"laptop",price:60000},
       {name:"tablet",price:50000},
       {name:"watch",price:20000},
       {name:"speaker",price:40000},
      
    ];

    for(let item of products){
        let data = new Product(item);
        await data.save();
    }
    console.log("Multiple data inserted")
}

saveInDB();

