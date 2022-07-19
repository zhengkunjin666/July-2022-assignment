const UserModel=require('./../models/user');
const User=new UserModel();
const authCodeFunc=require('./../utils/authCode');
const authContoller={
    login: async function(req,res,next){
        let email=req.body.email;
        let password=req.body.password;
        if(!email || !password){
            res.json({code: 0,data: 'params empty!'});
            return
        }
        try{
            const users=await User.select({email,password});
            const user=users[0];
            if(user){
                let auth_Code=email+'\t'+password+'\t'+user.id;
                auth_Code=authCodeFunc(auth_Code,'ENCODE');
                res.cookie('ac',auth_Code,{maxAge: 24*60*60*1000,httpOnly: true});
                res.json({code: 200,message: '登录成功！'});
            }else{
                res.json({code: 0,data: {msg: '登录失败，没有此用户！'}});
            }
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    renderLogin: async function(req,res,next){
        if(res.locals.isLogin){
            res.redirect('/user');
            return
        }
        res.render('login',res.locals);
    }
}
module.exports=authContoller;