const {Schema,model} = require('mongoose');

let lessonsScheme = new Schema({
    class:String,
    timeTable:Array,
    mon:[String],
    tue:[String],
    wed:[String],
    thr:[String],
    fri:[String],
    sat:[String],
})
module.exports = model('Lessons',lessonsScheme);