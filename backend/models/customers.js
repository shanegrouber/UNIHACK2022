const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    areaCode: {
        type: String,
        required: true,
        validate: {
            validator: function(code) {
                return !isNan(code) && code.length <= 3;
            },
            message: "Area code must be a number and less than 3 digits."
        }
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(number) {
                return !isNan(number) && number.length <= 10;
            },
            message: "Phone number must be a number and less than 10 digits."
        }
    }

})

module.exports = mongoose.model('NewsArticle', newsArticleSchema);