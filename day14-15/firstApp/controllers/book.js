const axios=require('axios');
const isbnapiModel=require('./../models/isbnapi');
const book={
    info: async function(req,res,next){
        const ISBN=req.query.isbn;
        const bookRequest=await isbnapiModel.isbn(ISBN);
        res.json({code: 200,data: bookRequest.data});
    }
}
module.exports=book;