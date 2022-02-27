const mongoose = require('mongoose');
var Customer = require('../models/customers');

module.exports = {
    addCustomer: function(req, res) {
        let newCustomerDetails = req.body;
        newCustomerDetails._id = new mongoose.Types.ObjectId();
        Customer.create(newCustomerDetails, function(err, customer) {
            if (err) return res.status(400).json(err);
            res.json(customer);
        })
    },
    deleteCustomer: function(req, res) {
        Customer.findOneAndRemove({
            areaCode: req.body.areaCode,
            phoneNumber: req.body.phoneNumber
        }, function(err) {
            if (err) return res.status(400).json(err);
            res.json();
        })
    },
    getCustomer: function(req, res) {
        Customer.findOne({
            areaCode: req.body.areaCode,
            phoneNumber: req.body.phoneNumber
        }, function(err, customer) {
            if (err) return res.status(400).json(err);
            if (!customer) return res.status(404).json();
            res.json(customer);
        })
    }
}