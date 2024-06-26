const mongoose = require('mongoose')
//mongoose can be used as a filer as well 
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}
  
module.exports = connectDB
