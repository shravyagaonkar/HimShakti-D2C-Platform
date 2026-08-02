const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  body,
  validationResult,
} = require("express-validator");

const User = require("../model/User");
const verifyToken = require("../temp/verifyToken");
const router = express.Router();

/* REGISTER */
router.post(
  "/register",
  [
    body("email")
      .isEmail()
      .withMessage(
        "Invalid email"
      ),

    body("password")
      .isLength({
        min: 6,
      })
      .withMessage(
        "Password must be at least 6 characters"
      ),
  ],

  async (req, res) => {
    try {
      console.log("NEW CODE RUNNING");
      const errors =
        validationResult(
          req
        );
        console.log("Body:", req.body);
console.log("Errors:", errors.array());

      if (
        !errors.isEmpty()
      ) {
        return res
          .status(400)
          .json({
            errors:
              errors.array(),
          });
      }

      const {
        email,
        password,
      } = req.body;

      const existingUser =
        await User.findOne(
          { email }
        );

      if (
        existingUser
      ) {
        return res
          .status(400)
          .json({
            message:
              "Email already exists",
          });
      }

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      await User.create({
        email,
        password:
          hashedPassword,
      });

      res.status(201).json({
        message:
          "User registered successfully",
      });

    } catch (err) {
      res.status(500).json({
        message:
          err.message,
      });
    }
  }
);

/* LOGIN */
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage(
        "Invalid email"
      ),

    body("password")
      .notEmpty()
      .withMessage(
        "Password is required"
      ),
  ],

  async (req, res) => {
    try {
      const errors =
        validationResult(
          req
        );

      if (
        !errors.isEmpty()
      ) {
        return res
          .status(400)
          .json({
            errors:
              errors.array(),
          });
      }

      const {
        email,
        password,
      } = req.body;

      const user =
        await User.findOne(
          { email }
        );

      if (!user) {
        return res
          .status(400)
          .json({
            message:
              "Invalid credentials",
          });
      }

      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (
        !isMatch
      ) {
        return res
          .status(400)
          .json({
            message:
              "Invalid credentials",
          });
      }

      const token =
        jwt.sign(
          {
            id: user._id,
          },
          process.env
            .JWT_SECRET,
          {
            expiresIn:
              "7d",
          }
        );

      res.json({
        message:
          "Login successful",
        token,
      });

    } catch (err) {
      res.status(500).json({
        message:
          err.message,
      });
    }
  }
);

/* PROTECTED ROUTE */
router.get(
  "/profile",
  verifyToken,
  (req, res) => {
    res.json({
      message:
        "Protected route works!",
      user: req.user,
    });
  }
);
router.get(
  "/me",
  verifyToken,
  (req, res) => {
    res.json({
      user: req.user,
    });
  }
);
module.exports = router;