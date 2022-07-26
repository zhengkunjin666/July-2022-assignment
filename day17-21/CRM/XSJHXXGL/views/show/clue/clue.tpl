{% extends './../../admin-layout.tpl' %}

{% block css %}
    <link rel="stylesheet" href="/stylesheets/reset.css">
    <link rel="stylesheet" href="/stylesheets/base.css">
    <link rel="stylesheet" href="/stylesheets/clue.css">
{% endblock %}
{% block content %}
<div class="container">
    <table id="table">
        <caption>线索管理</caption>
        <caption>
            <div class="filter-container">
                <h1 class="filter-title">筛选：</h1>
                <p class="filter-show">
                    <span class="show-text" id="show-text" data-id="name">姓名</span>
                    <span class="show-icon" id="icon">∨</span>
                </p>
                <ul class="filter-list" id="filter-list">
                    <li class="filter-item" data-id="name">姓名</li>
                    <li class="filter-item" data-id="phone">电话</li>
                    <li class="filter-item" data-id="source">来源</li>
                    <li class="filter-item" data-id="time">创建时间</li>
                    <li class="filter-item" data-id="salesperson">跟踪销售</li>
                    <li class="filter-item" data-id="state">状态</li>
                    <li class="filter-item" data-id="" style="height: 40px"></li>
                </ul>
                <div class="filter-wrapper">
                    <input class="filter-input" id="filter-input" type="text" placeholder="请输入查找内容">
                    <button class="filter-btn" id="filter-btn">查询</button>
                </div>
            </div>
        </caption>
        <thead>
            <tr>
                <th data-column="name">姓名<span id="name" data-order="desc" class="clue-orderby">↑</span></th>
                <th data-column="phone">电话<span id="phone" data-order="desc" class="clue-orderby">↑</span></th>
                <th data-column="source">来源<span id="source" data-order="desc" class="clue-orderby">↑</span></th>
                <th data-column="time">创建时间<span id="time" data-order="desc" class="clue-orderby">↑</span></th>
                <th data-column="salesperson">跟踪销售<span id="salesperson" span data-order="desc" class="clue-orderby">↑</span></th>
                <th data-column="state">状态<span id="state" data-order="desc" class="clue-orderby">↑</span></th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            {% for val in clues %}
            <tr>
                <td>{{val.name}}</td>
                <td class="phone">{{val.phone}}</td>
                <td>{{val.source}}</td>
                <td class="time">{{val.time}}</td>
                <td class="source">{{val.salesperson}}</td>
                <td>{{val.state}}</td>
                <td class="track" data-id="{{val.id}}">跟踪</td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</div>
{% endblock %}

{% block js %}
    <script>
        if("{{column}}"){
            let order=document.getElementById('{{column}}');
            if("{{order}}" == "desc"){
                order.dataset.order="asc";
            };
            if("{{orderText}}" == "↑"){
                order.innerText="↓";
            };
        };
        if("{{showText}}"){
            let showText=document.getElementById('show-text');
            let value="{{filterInput}}".split("%")[1];
            showText.innerText="{{showText}}";
            showText.dataset.id="{{dataId}}";
            let filterInput=document.getElementById('filter-input');
            filterInput.value=value;
        };
    </script>
    <script src="/javascripts/clue.js"></script>
{% endblock %}