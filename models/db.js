const mongoose = require('mongoose')

module.exports = mongoose.connect(`mongodb+srv://nirmal:${encodeURIComponent('nirmal')}@cluster0.j5kko.mongodb.net/?retryWrites=true&w=majority`,{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false,
    family: 4,
}, err => {
    if(err) console.log(`Error in DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded...`)
})
