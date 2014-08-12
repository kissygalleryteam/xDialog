## xDialog

* 版本：1.1.0
* 教程：[http://gallery.kissyui.com/xdialog/1.0.0/guide/index.html](http://gallery.kissyui.com/xdialog/1.0.0/guide/index.html)
* demo：[http://gallery.kissyui.com/xdialog/1.0.0/demo/index.html](http://gallery.kissyui.com/xdialog/1.0.0/demo/index.html)


## 初始化组件
	
	// 使用默认配置的初始化
    S.use('kg/xdialog/1.0.0/index', function (S, xDialog) {
         var dialog = new xDialog();
    })
	// 使用自定义配置的初始化
    S.use('kg/xdialog/1.0.0/index', function (S, xDialog) {
         var box = new xDialog({
            title : '确定删除',
            html  : '亲，你确定要执行删除命令吗？',
            action: function () {
                console.log('you clicked yes!')
            }
        });
    })