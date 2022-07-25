{% extends './../../admin-layout.tpl' %}

{% block css %}
    <link rel="stylesheet" href="/stylesheets/reset.css">
    <link rel="stylesheet" href="/stylesheets/base.css">
    <link rel="stylesheet" href="/stylesheets/edit.css">
{% endblock %}

{% block content %}
<div class="container">
    <div class="edit-title" onclick="location.assign('/admin/user')">返回用户列表 >></div>
    {% for val in user %}
        <form class="edit-list">
            <div class="edit-item">姓名：<input class="edit-input" id="edit-name" type="text" name="name" value="{{val.name}}"></div>
            <div class="edit-item phone-wrapper">电话：
                <input class="edit-input" id="edit-phone" type="text" name="phone" value="{{val.phone}}">
                <span class="errortext" id="errorText"></span>
            </div>
            <div class="edit-item">密码：<input class="edit-input" id="edit-password" type="text" name="password" value="{{val.password}}"></div>
            <div class="edit-item">角色：<input class="edit-input" id="edit-role" type="text" name="role" value="{{val.role}}"></div>
        </form>
        <button id="edit-submit" data-id="{{val.id}}">保存</button>
    {% endfor %}
    <div class="csrf-contianer">
        <input type="text" name="csrf" id="csrf" value="{{csrf}}" hidden>
    </div>
</div>
{% endblock %}

{% block js %}
    <script src="/javascripts/edit.js"></script>
{% endblock %}