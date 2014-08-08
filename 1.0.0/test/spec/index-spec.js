KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('xdialog', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/xdialog/1.0.0/']});