const express = require("express");
const axios = require("axios");

const router = express.Router();


router.post("/generate", async (req, res) => {

  try {

    const { title } = req.body;


    if (!title) {
      return res.status(400).json({
        message: "Product title is required"
      });
    }


    console.log(
      "Generating description for:",
      title
    );


    const response = await axios.post(

      "https://router.huggingface.co/v1/chat/completions",

      {
        model: "Qwen/Qwen2.5-7B-Instruct",

        messages: [
          {
            role: "user",
            content:
            `Create a short attractive ecommerce product description for ${title}.`
          }
        ],

        max_tokens: 150
      },


      {
        headers: {

          Authorization:
          `Bearer ${process.env.HF_TOKEN}`,

          "Content-Type":
          "application/json"

        }
      }

    );


    const description =
      response.data.choices[0].message.content;


    console.log(
      "Generated:",
      description
    );


    res.json({
      description
    });


  }
  catch(error){

    console.log(
      "HF ERROR:",
      error.response?.data ||
      error.message
    );


    res.status(500).json({

      message:
      "AI generation failed",

      error:
      error.response?.data ||
      error.message

    });

  }

});


module.exports = router;