var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
    name: String,
    industry: String,
    phone: String,
    street: String,
    city: String,
    state: String,
    zip_code: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Company', CompanySchema);
