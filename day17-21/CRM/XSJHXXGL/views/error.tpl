{% extends './layout.tpl' %}

{% block css %}
    <link rel="stylesheet" href="/stylesheets/style.css">
{% endblock %}

{% block content %}
  <h1 class="red">{{message}}</h1>
  <h2 class="red">{{error.status}}</h2>
  <pre class="red">{{error.stack}}</pre>
{% endblock %}