const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/flight')
.then((res)=>{
    console.log('database connect')
})
.catch((err)=>{
    console.log('no connection')
})