const connect = require("../../mongoseconnect");
const item = require("../../module/additems-table");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usertoken = require("../../middleware/tokencheck");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.post("/additem", usertoken, async (req, res) => {
  let con = await connect();
  let productid = req.body.productid;
  let productname = req.body.productname;
  let price = req.body.price;
  let category = req.body.category;
  let stock = req.body.stock;
  let description = req.body.description;
  let image = req.body.image;
  let featured = req.body.feature;

  try {
    let add = new item({
      productid,
      productname,
      price,
      category,
      stock,
      description,
      image,
      featured
    });
    add = await add.save();
    res.json(add);
  } catch (error) {
    res.json("Already a data");
  }
});

app.get('/finditem/:id',async(req,res)=>{
  let con = await connect();
  let productid = req.params.id;
  let add = await item.findOne({productid})
   res.json(add);
})

app.get("/search/:type",async(req,res)=>{
  let con = await connect();
  let type = req.params.type;
  let add=await item.find({
    "$or":[
      {"productname":{$regex:type}},
      {"category":{$regex:type}}
    ]
  })
  res.send(add)
})

app.get("/feature/:type",async(req,res)=>{
  let con = await connect();
  let type = req.params.type;
  let add=await item.find({
    "$or":[
      {"featured":{$regex:type}}
    ]
  })
  res.send(add)
})





app.post("/removeitem", usertoken, async (req, res) => {
  let con = await connect();
  let productid = req.body.productid;
  let add = await item.deleteOne({ productid });
  res.json(add);
});

app.post("/edititem", usertoken, async (req, res) => {
  let con = await connect();
  let productid = req.body.productid;
  let productname = req.body.productname;
  let price = req.body.price;
  let category = req.body.category;
  let stock = req.body.stock;
  let description = req.body.description;
  let image = req.body.image;
  let featured = req.body.feature;
  
  var newNote = {};
  if (productname) {
    newNote.productname = productname;
  }
  if (price) {
    newNote.price = price;
  }
  if (category) {
    newNote.category = category;
  }
  if (stock) {
    newNote.stock = stock;
  }
  if (description) {
    newNote.description = description;
  }
  if (image) {
    newNote.image = image;
  }
  if (featured) {
    newNote.featured = featured;
  }

  let add = await item.findOneAndUpdate(
    { productid: productid },
    { $set: newNote },
    { new: true }
  );
  res.json(add);
});

app.get("/showitems", async (req, res) => {
  let con = await connect();
  let add = await item.find();
  res.json(add);
});

module.exports = app;
