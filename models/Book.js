const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const bookSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    copies:{
        type: Number, default: 1
    },
    author:
    {
        type:String,
        required:true
    }
});



const Book=mongoose.model('Book',bookSchema);

module.exports=Book;