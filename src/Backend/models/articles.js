const mongoose = require('mongoose'); 


const articlesSchema = new mongoose.Schema({
    _id: {type:mongoose.Schema.Types.Mixed, required: true}, 
    index: {type:mongoose.Schema.Types.Mixed, required: false},
    Website: {type:mongoose.Schema.Types.Mixed, required: false},
    Title: {type:mongoose.Schema.Types.Mixed, required: false},
    Author: {type:mongoose.Schema.Types.Mixed, required: false}, 
    Date: {type:mongoose.Schema.Types.Mixed, required: false}, 
    Summary: {type:mongoose.Schema.Types.Mixed, required: false},
    Keywords: {type:mongoose.Schema.Types.Mixed, required: false}, 
    Text: {type:mongoose.Schema.Types.Mixed, required: false},
    Image: {type:mongoose.Schema.Types.Mixed, required: false},
    Category: {type:mongoose.Schema.Types.Mixed, required: false},
    Read_Time: {type:mongoose.Schema.Types.Mixed, required: false},
    URL: {type:mongoose.Schema.Types.Mixed, required: false}
});



module.exports = mongoose.model('Article', articlesSchema); 