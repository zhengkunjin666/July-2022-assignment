const axios=require('axios');
const ISBN_API='https://api.jike.xyz/situ/book/isbn/';
const API_KEY='13080.d957e6669fec7e00c85e7c65dc52d046.fe4cabc584921121631127e41071c256'
const isbnapi={
    isbn: function(isbn){
        return axios.get(ISBN_API+isbn+"?apikey="+API_KEY);
    }
}
module.exports=isbnapi;