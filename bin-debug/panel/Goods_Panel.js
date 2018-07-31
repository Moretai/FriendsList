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
var Goods_Panel = (function (_super) {
    __extends(Goods_Panel, _super);
    function Goods_Panel() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/game/GoodsPanel.exml";
        return _this;
    }
    Goods_Panel.prototype.onComplete = function () {
        var arr_goods = [
            { url: "resource/panel/heros_goods/goods01.png", name: "魔法石", introduce: "法力加成 +3" },
            { url: "resource/panel/heros_goods/goods02.png", name: "诅咒娃娃", introduce: "智力加成 +3" },
            { url: "resource/panel/heros_goods/goods03.png", name: "万圣戒指", introduce: "法力加成 +3" },
            { url: "resource/panel/heros_goods/goods04.png", name: "斗篷", introduce: "魔法抗性 +3" },
            { url: "resource/panel/heros_goods/goods05.png", name: "鹅毛笔", introduce: "法力加成 +5" },
            { url: "resource/panel/heros_goods/goods06.png", name: "血滴子", introduce: "嗜血加成 +3" },
            { url: "resource/panel/heros_goods/goods07.png", name: "屠龙刀", introduce: "力量加成 +3" }
        ];
        //转换为euilist
        var eui_goods = new eui.ArrayCollection(arr_goods);
        this.list_goods.dataProvider = eui_goods;
        //返回按钮添加事件
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            ScenesManger.Instance.OnGoHome();
        }, this);
    };
    return Goods_Panel;
}(Scenes));
__reflect(Goods_Panel.prototype, "Goods_Panel");
