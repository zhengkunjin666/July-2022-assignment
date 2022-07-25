<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link rel="stylesheet" href="/stylesheets/reset.css">
    <link rel="stylesheet" href="/stylesheets/base.css">
    <link rel="stylesheet" href="/stylesheets/login.css">
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
            </div>
        </header>
        <main>
            <div class="login-card">
                <h1 class="login-title">Mercedes-Benz</h1>
                <form>
                    <div class="phone-wrapper">
                        <input type="text" id="phone" placeholder="请输入你的手机">
                        <span class="errortext" id="errorText"></span>
                    </div>
                    <input type="password" id="password" placeholder="请输入你的密码">
                    <div id="login-btn">马上登录</div>
                </form>
                <div class="csrf-contianer">
                    <input type="text" name="csrf" id="csrf" value="{{csrf}}" hidden>
                </div>
            </div>
        </main>
        <footer>
            <p class="copyright">Copyright © 2019 极客学院体验技术部出品</p>
        </footer>
    </div>
    <script src="/javascripts/login.js"></script>
</body>
</html>