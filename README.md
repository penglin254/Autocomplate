# Autocomplate.js
一个同时兼容移动端和pc端的一个自动完成的组件

## version
1.0.1

## 功能概述
可实现移动端和pc的input输入事件，自动检索数据结果。

## 使用和安装
- 使用: 如果没bower环境,需要引入jquery或者zepto
- 安装: bower i

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

```js
   $("input[data-auto='complate']").autoComplate({
            'data': source
   })
```


   注意 source 指向的是你的数据源，即要显示的数据

## 关于 1.0.1
1.增加了PC端上下键盘选中下拉选项的支持<br>
2.增加了选中选项的状态，增加了是否为手机还是PC端的判断<br>

```js
   $("input[data-auto='complate']").autoComplate({
       'fontSize': '.8rem', //声明下拉选项的字体大小
       'data': source, //声明数据源（数组）
       'isMobile': false, //是否是移动端
       'border': 'solid', //声明下拉边框样式
       'borderColor': '#ddd', //声明下拉边框颜色
   })
```

## 查看演示
[demo](https://penglin254.github.io/Autocomplate/example/index.html)

## 关于 1.1.0
后续应该会更新移动端的显示情况

## 关于 autocomplate.js
1.有问题请提交github issue上。<br>
2.有什么好的建议或者改进可以联系作者。

### 联系方式
wechat : 139193411<br>
qq : [139193411](http://wpa.qq.com/msgrd?v=3&uin=139193411&site=qq&menu=yes)