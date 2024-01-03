


const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); // Corrected bcrypt import

router.post(
  '/createuser',
  [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt); // Corrected variable name

    try {
      await User.create({
        name: req.body.name,
        password: secPassword, // Corrected variable name
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  '/loginuser',
  [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   
    const email = req.body.email;
    try {
      const userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: 'Invalid credentials' });
      }
      const isPasswordValid = await bcrypt.compare(req.body.password, userData.password);
      if (!isPasswordValid) {
        return res.status(400).json({ errors: 'Invalid credentials' });
      }
      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
