const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const rateLimit = require("express-rate-limit");

require("dotenv").config();


const app = express();


// Environment Check
console.log(
  "HuggingFace Key Loaded:",
  process.env.HF_TOKEN ? "YES" : "NO"
);



// Import Routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const aiRoutes = require("./routes/aiRoutes");



console.log(
  "Products Route:",
  path.resolve(__dirname, "./routes/products.js")
);


console.log(
  "AI Routes Loaded Successfully"
);



// Middleware

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended:true
}));



// Request Logger

app.use((req,res,next)=>{

  console.log(
    `${req.method} ${req.url}`
  );

  console.log(
    "BODY:",
    req.body
  );

  next();

});




// MongoDB Connection

mongoose
.connect(process.env.MONGO_URI)

.then(()=>{

  console.log(
    "✅ MongoDB Connected"
  );

})

.catch((error)=>{

  console.log(
    "❌ MongoDB Error:",
    error
  );

});




// Rate Limiter

const authLimiter = rateLimit({

  windowMs:
  60 * 1000,

  max:1,

  standardHeaders:true,

  legacyHeaders:false,


  handler:(req,res)=>{

    res.status(429).json({

      message:
      "Too many attempts. Try again later."

    });

  }

});




// Routes


app.use(
  "/api/auth",
  authLimiter,
  authRoutes
);


app.use(
  "/api/products",
  productRoutes
);


app.use(
  "/api/ai",
  aiRoutes
);




// Home Test

app.get("/",(req,res)=>{

  res.send(
    "Welcome to HimShakti Backend!"
  );

});



// AI Test

app.get("/test-ai",(req,res)=>{

  res.json({

    message:
    "AI route setup working"

  });

});




// Server Start

const PORT =
process.env.PORT || 5000;


app.listen(PORT,()=>{

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});