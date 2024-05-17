const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();


//middleware
const PORT = 6060
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Schemas

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        role: String,
        profileImg: String,
        balance: String,
        basketItem: Array
    },
    { timestamps: true }
);
const orderSchema = new mongoose.Schema(
    {
        userId:String, 
        totalPrice:Number, 
        status:String, 
        items:Array
    },
    { timestamps: true }
);
const messageSchema = new mongoose.Schema(
    {
        fullName:String, email:String, title:String, message:String
    },
    { timestamps: true }
);
const productsSchema = new mongoose.Schema(
    {
        name:String, 
        salePrice:Number, 
        costPrice:Number, 
        imgSrc:String, 
        discountPercentage:Number, 
        description:String, 
        categoryId:String, 
        stock:Number
    },
    { timestamps: true }
);
const categorysSchema = new mongoose.Schema(
    {
        name: String,
    },
    { timestamps: true }
);

// Models

const UsersModel = mongoose.model("Users", userSchema);
const ProductsModel = mongoose.model("Products", productsSchema);
const OrdersModel = mongoose.model("Orders", orderSchema);
const MessagesModel = mongoose.model("Messages", messageSchema);
const CategorysModel = mongoose.model("Categorys", categorysSchema);



// users reguests
app.get("/api/users", async (req, res) => {
    const users = await UsersModel.find();

    if (users.length > 0) {
        res.status(200).send({
            message: "success",
            data: users,
        });
    } else {
        res.send({
            message: "not found",
            data: null,
        });
    }
});
app.get("/api/users/:id", async (req, res) => {
    const { id } = req.params;
    let user;
    try {
        user = await UsersModel.findById(id);
    } catch (error) {
        res.send({ error: error });
    }
    if (user) {
        res.status(200).send({
            message: "success",
            data: user,
        });
    } else {
        res.send({
            message: "no content",
            data: null,
        });
    }
});
app.post("/api/users", async (req, res) => {
    const user = new UsersModel(req.body);
    await user.save();
    res.send({
        message: "posted",
        data: user,
    });
});
app.delete("/api/users/:id", async (req, res) => {
    const { id } = req.params;
    let response;
    try {
        response = await UsersModel.findByIdAndDelete(id);
    } catch (error) {
        res.send({
            error: error,
        });
    }
    res.send({
        message: "deleted",
        response: response,
    });
});
app.patch("/api/users/:id", async (req, res) => {
    const { id } = req.params;
    const response = await UsersModel.findByIdAndUpdate(id, req.body);
    res.send({
        message: "updated",
        response: response,
    });
});
// Products reguests
app.get("/api/products", async (req, res) => {
    const products = await ProductsModel.find();

    if (products.length > 0) {
        res.status(200).send({
            message: "success",
            data: products,
        });
    } else {
        res.send({
            message: "not found",
            data: null,
        });
    }
});
app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    let product;
    try {
        product = await ProductsModel.findById(id);
    } catch (error) {
        res.send({ error: error });
    }
    if (product) {
        res.status(200).send({
            message: "success",
            data: product,
        });
    } else {
        res.send({
            message: "no content",
            data: null,
        });
    }
});
app.post("/api/products", async (req, res) => {
    const product = new ProductsModel(req.body);
    await product.save();
    res.send({
        message: "posted",
        data: product,
    });
});
app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    let response;
    try {
        response = await ProductsModel.findByIdAndDelete(id);
    } catch (error) {
        res.send({
            error: error,
        });
    }
    res.send({
        message: "deleted",
        response: response,
    });
});
app.patch("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    const response = await ProductsModel.findByIdAndUpdate(id, req.body);
    res.send({
        message: "updated",
        response: response,
    });
});







mongoose
    .connect('mongodb+srv://Admin:Admin123@cluster.slmtzms.mongodb.net/')
    .then(() => console.log("Connected!"))
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT, () => {
    console.log(PORT)
})