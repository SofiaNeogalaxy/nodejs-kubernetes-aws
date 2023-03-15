const express = require('express');
const mysql = require('mysql2/promise');
const AWS = require('aws-sdk');

const app = express();

// AWS S3 configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});

// MySQL database configuration
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// API endpoints
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/data', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM data');
    res.json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error retrieving data from database');
  }
});

app.post('/data', async (req, res) => {
  try {
    const [result] = await pool.query('INSERT INTO data (name) VALUES (?)', [req.body.name]);
    res.json({ id: result.insertId });
  } catch (err) {
