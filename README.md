# Autocomplate.js
一个同时兼容移动端和pc端的一个自动完成的组件

## version
1.0.0

## 功能概述
可实现移动端和pc的input输入事件，自动检索数据结果。

## 使用和安装
### 使用: 如果没bower环境,需要引入jquery或者zepto
### 安装: bower i

## 兼容性
### 移动端:
- Ios4+
- Andriod2.3+（未全部覆盖）

### Pc端:
- IE8+
- Chrome
- Safari
- Firefox
- Opera


## 快速上手
### HTML

	<input class="auto" type="text" data-auto="complate" placeholder="请输入您要搜索的关键字">

### CSS

    <link rel="stylesheet" type="text/css" href="dist/autocomplate.min.css">

### JS

    <script src="dist/autocomplate.min.js"></script>

## 使用插件
   $("input[data-auto='complate']").autoComplate({
                   'data': source,
   })

### 注意 source 指向的是你的数据源，即要显示的数据

## 查看演示
demo(https://github.com/yanhaijing/zepto.fullpage/issues)
