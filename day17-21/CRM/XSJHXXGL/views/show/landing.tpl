<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link rel="stylesheet" href="/stylesheets/reset.css">
    <link rel="stylesheet" href="/stylesheets/base.css">
    <link rel="stylesheet" href="/stylesheets/landing.css">
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
            <div class="order-container">
                <h1 class="order-title">{{title}}</h1>
                <div class="order-card">
                    <p class="order-desc">欢迎在线预约试驾。只需填写姓名及手机号，我们会第一时间与您联系，安排试驾事宜。</p>
                    <form>
                        <input type="text" id="name" placeholder="你的姓名">
                        <div class="phone-wrapper">
                            <input type="text" id="phone" placeholder="你的电话">
                            <span class="errortext" id="errorText"></span>
                        </div>
                        <div id="order-btn">马上抢占名额</div>
                    </form>
                </div>
                <img class="landing-bg" src="/images/landing_bg.png">
            </div>
        </main>
        <footer>
            <p class="copyright">Copyright © 2019 极客学院体验技术部出品</p>
        </footer>
    </div>
    <script src="/javascripts/landing.js"></script>
</body>
</html>