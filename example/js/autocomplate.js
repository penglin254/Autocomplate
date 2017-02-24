/**
 * github : https://github.com/penglin254
 * author : lin
 * email : 139193411@qq.com
 */

;(function ($) {
    'use strict';
    var Autocomplate = function (ele, opt) {
        this.$element = ele,
            this.default = {
                'border': 'solid',
                'fontSize': '10px',
                'data': [],
                'borderColor': '#ddd',
                'isMobile': false,
            }
        this.options = $.extend({}, this.default, opt)
    }

    Autocomplate.prototype = {
        create: function () {
            var $dom = $('<div class="auto_container"></div>'), that = this, offsetLeft = that.$element.offset().left, offsetTop = that.$element.offset().top;
            if (this.options.isMobile === false) {
                $dom.css({
                    top: offsetTop + that.$element.height(),
                    left: offsetLeft,
                    width: that.$element.width()
                })
            }
            that.textVal(that.options.data);
            $('body').append($dom);
            that.search();
        },

        textVal: function (arr) {
            var $dom = $("div.auto_container"), $domChild = $('<div class="auto_child"></div>');
            this.destroy($dom.children("div"));
            $domChild.css({
                "border-bottom": "1px",
                "border-bottom-style": this.options.border,
                "border-bottom-color": this.options.borderColor,
                "font-size": this.options.fontSize
            })
            for (var i = 0; i < arr.length; ++i) {
                $dom.append($domChild.clone());
            }

            $dom.children("div").each(function (i) {
                $(this).text(arr[i]);
            });

            this.tap();
        },

        search: function () {
            var that = this;
            this.$element.on("input", function () {
                var arr = new Array(), vLength = $(this).val().length;
                if (vLength > 0) {
                    for (var i = 0; i < that.options.data.length; i++) {
                        if (that.options.data[i].substring(0, vLength).indexOf($(this).val()) != "-1") {
                            arr.push(that.options.data[i]);
                        }
                    }
                }

                that.textVal(arr);
            })
        },
        destroy: function (dom) {
            dom.remove();
        },

        tap: function () {
            var tapDom = $("div.auto_container>div"), that = this;
            tapDom.click(function () {
                that.$element.val($(this).text());
                that.destroy(tapDom);
            })

        },

        apply: function () {
            return this.create();
        }
    }

    $.fn.autoComplate = function (options) {
        var autoComplate = new Autocomplate(this, options);
        return autoComplate.apply();
    }
})(window.jQuery || window.Zepto)
