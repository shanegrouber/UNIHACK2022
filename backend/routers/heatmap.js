const mongoose = require('mongoose');
var Heatmap = require('../models/heatmap');

module.exports = {
    getAllHeatmapData: function(req, res) {
        Heatmap.find({})
            .exec(function(err, countryData) {
                if (err) return res.status(400).json(err);
                if (!countryData) return res.status(404).json();
                res.json(countryData);
            })
    }
}