/**
 * @fileoverview
 * @author
 * @module xdialog
 **/
KISSY.add(function (S, Node, Base, Event) {

    /* 组件默认配置项 */
    var defaults = {
        title : '你确定要执行吗',
        html  : '点击确定，命令将会立即执行且不可逆。'
    };

    var Dialog = function (options) {
        this.options = S.merge(defaults, options || {});
        this.init();
    };

    S.augment(Dialog, {

        /* 组件初始化 */
        init: function () {
            var self = this;

            var template = '<div class="dialog-overlay"></div><div class="dialog-popup"><div class="dialog-content"></div></div>';

            Node.one('.container').addClass('dialog-overlay-blur');

            S.DOM.insertAfter(S.DOM.create(template), '.container');
            var dialog = Node.one('.dialog-content');

            if (self.options['title']) {
                dialog.append('<div class="dialog-header"><h3>' + self.options['title'] +'</h3></div>');
            }
            if (self.options['html']) {
                dialog.append('<div class="dialog-body">' + self.options['html'] +'</div>');
            }

            dialog.append('<div class="dialog-footer"><button class="yes">\u786e\u5b9a</button><button class="no">\u53d6\u6d88</button></div>');

            /* 处理事件模块 */
            self.bindEvent();
        },
        close: function () {
            S.DOM.remove('.dialog-overlay');
            S.DOM.remove('.dialog-popup');
            Node.one('.container').removeClass('dialog-overlay-blur');
        },

        bindEvent: function (action) {
            var self = this;
            /* 获取配置项中得回调函数 */
            var action = self.options['action'];

            Node.one('.dialog-footer .yes').on('click', function () {
                action.call();
                self.close();
            });
            Node.one('.dialog-footer .no').on('click', function () {
                self.close();
            });
            document.addEventListener( 'keyup', function (e) {
                if (e.keyCode === 27) {
                    self.close();
                }
            }, false );
        }
    });

    return Dialog;
}, {requires:['node', 'base', 'event']});



