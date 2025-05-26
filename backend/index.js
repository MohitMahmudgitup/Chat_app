import express from 'express'
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import 'dotenv/config'

// Importing dotenv to load environment variables
const app = express()
const PORT = process.env.PORT || 3000 || 5000; 



connectDB()
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})
