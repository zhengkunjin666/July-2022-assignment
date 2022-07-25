const JWT=require("jsonwebtoken");
const key="Q1JNIOmUgOWUruacuuS8muS/oeaBr+euoeeQhg==";
const authcode=function(str,operation){
    operation ? operation : 'DECODE';
    if(operation == 'DECODE'){
        return JWT.verify(str,key);
    }else{
        return JWT.sign({str},key,{
            expiresIn: "30d"
        })
    }
}
module.exports=authcode;