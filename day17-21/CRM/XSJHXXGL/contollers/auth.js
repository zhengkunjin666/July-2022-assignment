const Models=require('../models/models')
const User=new Models.User;
const authCodeFunc=require('../utils/authCode');
const authController={
    login: async function(req,res,next){
        let phone=req.body.phone;
        let password=req.body.password;
        if(!phone || !password){
            res.json({code: 0,data: "缺少参数！"});
            return
        } 
        try{
            console.log({phone,password})
            const users=await User.select({phone,password});
            const user=users[0];
            if(user){
                let auth_Code=phone+'\t'+password+'\t'+user.role+'\t'+user.name+'\t'+user.id;
                auth_Code=authCodeFunc(auth_Code,'ENCODE');
                res.cookie('crm',auth_Code,{maxAge: 24*60*60*1000});
                res.json({code: 200,data: {msg: "登录成功！"}});
            }else{
                res.json({code: 0,data:{msg: "登录失败，帐号密码错误！"}});
            }
        }catch(e){
            res.json({code: 0,data: e});
        }
    },
    renderLogin: async function(req,res,next){
        if(res.locals.isLogin){
            res.redirect('/admin/clue');
            return
        }
        res.render('show/login.tpl',{title: '登录'})
    }
}
module.exports=authController;