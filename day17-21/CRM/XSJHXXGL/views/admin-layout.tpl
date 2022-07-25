<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>销售机会信息管理</title>
    {% block css %}
    {% endblock %}
</head>
<body>
    <div class="layout-page">
        <header>
            <div class="header">
                <div class="header-left">
                    <img class="header-logo" src="/images/logo.png">
                    <div class="header-title">
                        <p class="title-text">Mercedes-Benz</p>
                        <p class="title-desc">The best or nothing.</p>
                    </div>
                </div>
                <div class="header-right">
                    <span class="user-name">{{userInfo.name}}</span>
                    <a class="quit" id="quit" href="#">退出</a>
                </div>
            </div>
        </header>
        <main>
            <nav class="nav">
                <a class="nav-item" data-id="user" id="user" href="#">人员管理</a>
                <a class="nav-item" data-id="clue" href="#" onclick="location.assign('/admin/clue')">线索管理</a>
            </nav>
            {% block content %}
            {% endblock %}
        </main>
        <footer>
            <p class="copyright">Copyright © 2019 极客学院体验技术部出品</p>
        </footer>
    </div>
    <script>
        const Layout={
            init: function(){
                this.bind();
            },
            bind: function(){
                window.addEventListener('load',this.handlerisAdmin);
                let quit =document.getElementById('quit');
                quit.addEventListener('click',this.DelCookie);
            },
            handlerisAdmin: function(){
                let role="{{userInfo.role}}";
                if(role == "管理员"){
                    let user=document.getElementById('user');
                    user.addEventListener('click',function(){location.assign('/admin/user')});
                }else{
                    let user=document.getElementById('user');
                    user.style.display="none";
                };
            },
            DelCookie: function(){
                var exp=new Date();
                exp.setTime(exp.getTime() - 1);
                document.cookie=`crm={{cookieCrm}};expires=${exp.toGMTString()};path=/`;
                location.reload();
            }
        }
        Layout.init();
    </script>
    {% block js %}
    {% endblock %}
</body>
</html>