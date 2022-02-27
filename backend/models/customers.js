const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    areaCode: {
        type: String,
        required: true,
        validate: {
            validator: function(code) {
                return code.is
            }
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
        required: true
    }

})

module.exports = mongoose.model('NewsArticle', newsArticleSchema);