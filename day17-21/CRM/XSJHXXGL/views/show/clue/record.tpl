{% extends './../../admin-layout.tpl' %}

{% block css %}
    <link rel="stylesheet" href="/stylesheets/reset.css">
    <link rel="stylesheet" href="/stylesheets/base.css">
    <link rel="stylesheet" href="/stylesheets/record.css">
{% endblock %}

{% block content %}
<div class="container">
    <div class="record-title" onclick="location.assign('/admin/clue')">返回线索列表 >></div>
    <div class="content-container">
        <div class="user-container" id="user-container">
            {% for val in clue %}
                <p>客户名称：{{val.name}}</p>
                <p>联系电话：{{val.phone}}</p>
                <p>线索来源：{{val.source}}</p>
                <p class="time">{{val.time}}</p>
                <p>用户状态：</p>
                <input class="state" type="text" id="state" value="{{val.state}}">
                <p class="salesperson">当前分配销售：</p>
                <div class="select-container" id="select-container">
                    <div id="show-container">
                        <p class="show" id="show">{{val.salesperson}}</p>
                        <span class="icon" id="icon">∨</span>
                    </div>
                    <ul class="select-list" id="select-list">
                        {% for user in users %}
                            <li class="select-item">{{user.name}}（id：{{user.id}}）</li>
                        {% endfor %}
                        <li class="select-item"></li>
                    </ul>
                </div>
                <p>备注：</p>
                <textarea class="textarea" id="save-textarea" placeholder="请输入备注~">{{val.comment}}</textarea>
                <button class="submit" id="save" data-id="{{val.id}}">保存</button>
            {% endfor %}
        </div>
        <div class="record-container">
            <ul id="record-content">
                {% for val in record %}
                    <li>
                        <p class="time">{{val.time}}</p>
                        <p class="content">{{val.content}}</p>
                    </li>
                {% endfor %}
            </ul>
            <p class="new-record">添加记录：</p>
            <textarea class="textarea" id="add-textarea" placeholder="请输入本次跟踪的记录～"></textarea>
            <button class="submit" id="add" data-id="{{clue[0].id}}">添加</button>
        </div>
        <div class="csrf-contianer">
            <input type="text" name="csrf" id="csrf" value="{{csrf}}" hidden>
        </div>
    </div>
</div>
{% endblock %}

{% block js %}
    <script src="/javascripts/record.js"></script>
    <script>
        var selectShow=function(){
            let selectList=document.getElementById('select-list');
            selectList.style.display="block";
        };

        let showContainer=document.getElementById('show-container');
        showContainer.addEventListener('click',selectShow,false);

        let role="{{userInfo.role}}";
        if(role !== "管理员"){
            showContainer.style.cursor="default";
            showContainer.removeEventListener('click',selectShow,false);
            let icon=document.getElementById('icon');
            icon.style.display="none";
        }

    </script>
{% endblock %}