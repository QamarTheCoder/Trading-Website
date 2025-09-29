require('dotenv').config();

const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const {HoldingsModel} = require('./models/HoldingsModel.js')
const {Ordersmodel} = require('./models/OrdersModel.js')
const {PositionModel} = require('./models/PositionsModel.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 2020;
const URL = process.env.MONGO_URL;
const {Signup, Login}= require('./controllers/AuthController.js');
const { userVerification } = require('./controllers/Middlewares.js');
const cookieParser = require("cookie-parser");

const app=express();
app.use(bodyParser.json())
app.use(cors(
      {origin: ["http://localhost:3000", "http://localhost:3001"], // frontend
  credentials: true}
))
app.use(cookieParser())

app.get('/addingHoldings',async(req,res)=>{
    let TempData= await HoldingsModel.find({})
    res.json(TempData)
})
app.get('/addingposition',async(req,res)=>{
    let TempData= await PositionModel.find({})
    res.json(TempData)
})

app.post('/neworderData',async(req,res)=>{
    const OrderData= new Ordersmodel({
        name: req.body.name,
        qyt: req.body.qyt,
        price: req.body.price,
        mode: req.body.mode,
    })
    await OrderData.save()
    console.log('Purchased')
    const HoldingsData= new HoldingsModel({
         name:req.body.name ,
        qty: req.body.qyt,
        avg: req.body.price,
        price: req.body.price,
        net: "0%",
        day: "0%",
    })
    await HoldingsData.save()
})

app.get('/ordersdata',async(req,res)=>{
    const OrderData= await Ordersmodel.find({})
    res.json(OrderData)
})

app.post('/signup',Signup)
app.post('/login',Login)
app.post('/',userVerification)

app.listen(PORT,()=>{
    console.log('started')
    mongoose.connect(URL)
    console.log('DBConnected')

})