const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codezy')
.then(()=>{
    console.log('connected')
})