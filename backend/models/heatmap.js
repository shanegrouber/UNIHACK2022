const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    city: { type: String },
    country: { type: String },
    lat: { type: Number },
    long: { type: Number },
    count: { type: Number },
    articles: [String],
    urls: [String],
    source: [String],
    thumbnail: [String],
    publishdate: [String]
});
const heatmapSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: [countrySchema]
})

module.exports = mongoose.model('Heatmap', heatmapSchema);