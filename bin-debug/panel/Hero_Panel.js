var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Hero_Panel = (function (_super) {
    __extends(Hero_Panel, _super);
    function Hero_Panel() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/game/HeroPanel.exml";
        return _this;
    }
    Hero_Panel.prototype.onComplete = function () {
        //添加元素
        var arr = [
            { image: "resource/panel/heros_goods/heros01.png", name: "尹文婕林", introduce: "樱桃小丸子", isSelected: false },
            { image: "resource/panel/heros_goods/heros02.png", name: "德玛西亚", introduce: "樱桃小丸子", isSelected: false },
            { image: "resource/panel/heros_goods/heros03.png", name: "寒冰射手", introduce: "樱桃小丸子", isSelected: false },
            { image: "resource/panel/heros_goods/heros04.png", name: "诺克萨斯", introduce: "樱桃小丸子", isSelected: false },
            { image: "resource/panel/heros_goods/heros05.png", name: "卡特琳娜", introduce: "樱桃小丸子", isSelected: false },
            { image: "resource/panel/heros_goods/heros06.png", name: "圣枪游侠", introduce: "樱桃小丸子", isSelected: false },
            { image: "resource/panel/heros_goods/heros07.png", name: "普朗多", introduce: "樱桃小丸子", isSelected: false },
        ];
        var eui_arr = new eui.ArrayCollection(arr);
        this.heros.dataProvider = eui_arr;
        this.heros.itemRenderer = Hero_Item;
        //按钮事件
        this.confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onConfirmClick, this);
        //返回按钮点击回到主城
        this.return.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            ScenesManger.Instance.OnGoHome();
        }, this);
    };
    //确定按钮事件
    Hero_Panel.prototype.onConfirmBegin = function (evt) {
        var btu = evt.target;
        btu.scaleX = btu.scaleY += 0.1;
    };
    //确定按钮事件
    Hero_Panel.prototype.onConfirmEnd = function (evt) {
        var btu = evt.target;
        btu.scaleX = btu.scaleY -= 0.1;
    };
    //点击确定按钮
    Hero_Panel.prototype.onConfirmClick = function () {
        var herosNum = this.heros.dataProvider;
        //定义checkvobx所有选择框的check属性
        var aNameChecked = [];
        for (var i = 0; i < herosNum.length; i++) {
            if (herosNum.getItemAt(i).isSelected) {
                aNameChecked.push(herosNum.getItemAt(i).name);
            }
        }
        //回到主页
        ScenesManger.Instance.OnGoHome(aNameChecked);
    };
    return Hero_Panel;
}(Scenes));
__reflect(Hero_Panel.prototype, "Hero_Panel");
