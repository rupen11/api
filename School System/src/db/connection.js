const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentapi", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connnected With Database");
}).catch((error) => {
    console.log("Some Error To Connect Database " + error);
})