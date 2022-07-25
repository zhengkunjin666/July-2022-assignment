{% extends './../../admin-layout.tpl' %}

{% block css %}
    <link rel="stylesheet" href="/stylesheets/reset.css">
    <link rel="stylesheet" href="/stylesheets/base.css">
    <link rel="stylesheet" href="/stylesheets/new.css">
{% endblock %}

{% block content %}
<div class="container">
    <div class="new-title" onclick="location.assign('/admin/user')">返回用户列表 >></div>
    <form class="new-list">
        <div class="new-item">姓名：<input class="new-input" id="new-name" type="text" name="name" placeholder="请输入姓名，此参数不能为空"></div>
        <div class="new-item phone-wrapper">电话：
            <input  class="new-input" id="new-phone" type="text" placeholder="请输入电话，此参数不能为空">
            <span class="errortext" id="errorText"></span>
        </div>
        <div class="new-item">密码：<input class="new-input" id="new-password" type="text" name="password" placeholder="请输入密码，此参数不能为空"></div>
        <div class="new-item">角色：<input class="new-input" id="new-role" type="text" name="role" placeholder="请输入角色，此参数不能为空"></div>
    </form>
    <button id="new-submit">保存</button>
    <div class="csrf-contianer">
        <input type="text" name="csrf" id="csrf" value="{{csrf}}" hidden>
    </div>
</div>
{% endblock %}

{% block js %}
    <script src="/javascripts/new.js"></script>
{% endblock %}