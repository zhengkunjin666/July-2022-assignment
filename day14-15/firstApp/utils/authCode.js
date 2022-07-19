const JWT=require('jsonwebtoken');
const key='5oiR55qE56ys5LiA5Y+w5pyN5Yqh5Zmo';
const authcode=function(str,operation){
    operation ? operation : 'DECODE';
    if(operation=='DECODE'){
        return JWT.verify(str,key);
    }else{
        return JWT.sign({str},key,{expiresIn: '30d'});
    }
};
module.exports=authcode;
