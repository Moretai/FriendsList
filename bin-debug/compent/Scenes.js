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
//所有场景类的基类
var Scenes = (function (_super) {
    __extends(Scenes, _super);
    function Scenes() {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        return _this;
    }
    return Scenes;
}(eui.Component));
__reflect(Scenes.prototype, "Scenes");
