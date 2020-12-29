const Joi = require('joi'); //server side validations
const { v4: uuidv4 } = require('uuid'); //generate unique id for each item
const express = require('express');
const multer = require("multer"); // file upload module
const path = require("path");
const fs = require('fs'); // file module
const { request } = require('http');

const app = express();
app.use(express.json());

// image storage engine 
const storage = multer.diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});
const upload = multer({
    storage: storage,
});

