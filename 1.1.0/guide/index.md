## 综述

xDialog 是一款基于 Kissy 1.4 的轻量级弹出窗组件。

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

## API说明
