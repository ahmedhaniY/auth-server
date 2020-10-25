'use strict';

const mongoose = require('mongoose');

const user = mongoose.Schema(
    {
        name: { type: String, required: true },
        password: { type: String, required: true }
    }

)

module.exports = mongoose.model('userModel', user)