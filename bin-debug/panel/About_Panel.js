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
var About_Panel = (function (_super) {
    __extends(About_Panel, _super);
    function About_Panel() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/game/AboutPanel.exml";
        return _this;
    }
    About_Panel.prototype.onComplete = function () {
        //关闭按钮事件
        this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            ScenesManger.Instance.OnGoHome();
        }, this);
    };
    return About_Panel;
}(Scenes));
__reflect(About_Panel.prototype, "About_Panel");
