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
var Player_Panel = (function (_super) {
    __extends(Player_Panel, _super);
    function Player_Panel() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/PlayerPanel.exml";
        return _this;
    }
    Player_Panel.prototype.onComplete = function () {
        //一键装备添加事件
        this.fit.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFitClick, this);
        this.fit.addEventListener(egret.TouchEvent.TOUCH_END, this.onFitEnd, this);
        //一键强化添加事件
        this.intensify.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFitClick, this);
        this.intensify.addEventListener(egret.TouchEvent.TOUCH_END, this.onFitEnd, this);
        //返回按钮添加事件
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            //把父物体身上的按钮组件的selected取消
            ScenesManger.Instance.OnGoHome();
        }, this);
        //增加装备
        var arr_equip = [
            { image: "resource/panel/profile/skillIcon01.png", name: "旋龙幻杀" },
            { image: "resource/panel/profile/skillIcon02.png", name: "魔魂天咒" },
            { image: "resource/panel/profile/skillIcon03.png", name: "天魔舞" },
            { image: "resource/panel/profile/skillIcon04.png", name: "痴情咒" },
            { image: "resource/panel/profile/skillIcon05.png", name: "吴文姬" },
            { image: "resource/panel/profile/skillIcon06.png", name: "霸天虐杀" },
            { image: "resource/panel/profile/skillIcon07.png", name: "灭魂狂萧" }
        ];
        var eui_arr_equip = new eui.ArrayCollection(arr_equip);
        this.equips.dataProvider = eui_arr_equip;
    };
    Player_Panel.prototype.onFitClick = function (evt) {
        var tempfit = evt.target;
        tempfit.scaleX = tempfit.scaleY += 0.2;
    };
    Player_Panel.prototype.onFitEnd = function (evt) {
        var tempfit = evt.target;
        tempfit.scaleX = tempfit.scaleY -= 0.2;
    };
    return Player_Panel;
}(Scenes));
__reflect(Player_Panel.prototype, "Player_Panel");
