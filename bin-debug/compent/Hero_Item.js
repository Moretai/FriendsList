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
var Hero_Item = (function (_super) {
    __extends(Hero_Item, _super);
    function Hero_Item() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/game/HeroItem.exml";
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComplete, _this);
        return _this;
    }
    Hero_Item.prototype.onComplete = function () {
        this.cbox_selected.addEventListener(eui.UIEvent.CHANGE, this.onChange, this);
    };
    Hero_Item.prototype.onChange = function () {
        this.data.isSelected = this.cbox_selected.selected;
    };
    Hero_Item.prototype.dataChanged = function () {
        this.cbox_selected.selected = this.data.isSelected;
    };
    return Hero_Item;
}(eui.ItemRenderer));
__reflect(Hero_Item.prototype, "Hero_Item");
