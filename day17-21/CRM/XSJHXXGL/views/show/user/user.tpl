{% extends './../../admin-layout.tpl' %}

{% block css %}
    <link rel="stylesheet" href="/stylesheets/reset.css">
    <link rel="stylesheet" href="/stylesheets/base.css">
    <link rel="stylesheet" href="/stylesheets/user.css">
{% endblock %}

{% block content %}
<div class="container">
    <table id="table">
        <caption>人员管理</caption>
        <thead>
            <tr>
                <th>id</th>
                <th>姓名</th>
                <th>电话</th>
                <th>密码</th>
                <th>角色</th>
                <th>编辑</th>
                <th>删除</th>
            </tr>
        </thead>
        <tbody>
            {% for val in users %}
            <tr>
                <td>{{val.id}}</td>
                <td>{{val.name}}</td>
                <td class="phone">{{val.phone}}</td>
                <td class="password">{{val.password}}</td>
                <td>{{val.role}}</td>
                <td class="update" data-id="{{val.id}}">✍</td>
                <td class="delete" data-id="{{val.id}}">╳</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
    <button id="new-user" onclick="location.assign('/admin/user/new')">新增用户</button>
    <div class="csrf-contianer">
        <input type="text" name="csrf" id="csrf" value="{{csrf}}" hidden>
    </div>
</div>
{% endblock %}

{% block js %}
    <script src="/javascripts/user.js"></script>
{% endblock %}