const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 👉 Check if email already exists
    const [existingUsers] = await db.execute('SELECT id FROM users WHERE email = ?', [email]);
    if (existingUsers.length > 0) {
      return res.status(409).json({ message: 'Email already registered' }); // 409 = Conflict
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Insert new user
    await db.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    // ✅ Send email (if SMTP configured)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"ZustNext" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to ZustNext',
      html: `<h3>Hello ${name},</h3>
             <p>You have successfully registered with ZustNext IT Solutions.</p>
             <p>Thank you for joining us!</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'User registered successfully. Email sent.' });
  } catch (error) {
    console.error('Register Error:', error.message, error);
    res.status(500).json({ message: 'Registration failed' });
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [users] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (users.length === 0) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, users[0].password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: users[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
