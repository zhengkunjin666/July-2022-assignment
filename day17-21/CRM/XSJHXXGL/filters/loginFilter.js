const authCodeFunc=require('../utils/authCode');
module.exports=function(req,res,next){
    res.locals.isLogin=false;
    res.locals.userInfo={};
    let auth_Code=req.cookies.crm;
    res.locals.cookieCrm=auth_Code;
    if(auth_Code){
        auth_Code=authCodeFunc(auth_Code,'DECODE').str;
        authArr=auth_Code.split('\t');
        let phone=authArr[0];
        let password=authArr[1];
        let role=authArr[2];
        let name=authArr[3];
        let id=authArr[4];
        res.locals.isLogin=true;
        res.locals.userInfo={phone,password,role,name,id};
        if(role=="管理员"){
            res.locals.isAdmin=true;
        }else{
            res.locals.isAdmin=false;
        }
    }
    next();
}