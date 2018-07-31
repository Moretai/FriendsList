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
var UI_Panel = (function (_super) {
    __extends(UI_Panel, _super);
    function UI_Panel() {
        var _this = _super.call(this) || this;
        _this.isRankClick = false;
        _this.skinName = "resource/eui_skins/game/UIPanel.exml";
        return _this;
    }
    Object.defineProperty(UI_Panel, "Instance", {
        get: function () {
            if (UI_Panel.instance == null) {
                UI_Panel.instance = new UI_Panel();
            }
            return UI_Panel.instance;
        },
        enumerable: true,
        configurable: true
    });
    UI_Panel.prototype.AddArr = function () {
        this.btusList = [this.tog_player, this.tog_hero, this.tog_goods, this.tog_about];
        for (var i = 0; i < this.btusList.length; i++) {
            this.btusList[i].selected = false;
        }
    };
    UI_Panel.prototype.onComplete = function () {
        //起初不选择
        this.lab_show.alpha = 0;
        this.AddArr();
        //遍历数组添加事件
        for (var i = 0; i < this.btusList.length; i++) {
            this.btusList[i].addEventListener(eui.UIEvent.CHANGE, this.OnBtuClick, this);
        }
        //按钮添加事件
        this.btn_ranking.addEventListener(egret.TouchEvent.TOUCH_TAP, this.obBtnRankingClick, this);
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.share, this);
    };
    UI_Panel.prototype.OnBtuClick = function (evt) {
        var tempBtn = evt.target;
        for (var i = 0; i < this.btusList.length; i++) {
            this.btusList[i].selected = (tempBtn == this.btusList[i]);
        }
        //点击到的按钮通过名字判断
        switch (tempBtn.name) {
            case "player":
                var playerScene = new Player_Panel();
                ScenesManger.Instance.OnChangeScenes(playerScene);
                break;
            case "hero":
                var heroScene = new Hero_Panel();
                ScenesManger.Instance.OnChangeScenes(heroScene);
                break;
            case "goods":
                var goodsScenes = new Goods_Panel();
                ScenesManger.Instance.OnChangeScenes(goodsScenes);
                break;
            case "about":
                var aboutScene = new About_Panel();
                ScenesManger.Instance.OnChangeScenes(aboutScene);
                break;
        }
        this.setChildIndex(this.group_btns, this.numChildren);
    };
    //主动分享按钮事件
    UI_Panel.prototype.share = function () {
        console.log("分享");
        platform.shareAppMessage();
    };
    //显示微信排行榜
    UI_Panel.prototype.obBtnRankingClick = function (e) {
        console.log("点击排行榜");
        var plathform = window.platform;
        if (!this.isRankClick) {
            //处理遮罩,避免开放域数据影响主域
            this.rankingListMask = new egret.Shape();
            this.rankingListMask.graphics.beginFill(0x000000, 1);
            this.rankingListMask.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
            this.rankingListMask.graphics.endFill();
            this.rankingListMask.alpha = 0.4;
            //设置为true,以免触摸到下面的按钮
            this.rankingListMask.touchEnabled = true;
            this.addChildAt(this.rankingListMask, 999);
            //让排行榜按钮显示在容器内
            this.addChild(this.btn_ranking);
            //显示开放域数据
            this.bitmap = plathform.openDataContext.createDisplayObject(null, this.stage.stageWidth, this.stage.stageHeight);
            this.addChild(this.bitmap);
            //主域向子域发送数据
            plathform.openDataContext.postMessage({
                isRanking: this.isRankClick,
                text: "egret",
                year: (new Date()).getFullYear(),
                command: "close"
            });
            this.isRankClick = true;
        }
        else {
            this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            this.isRankClick = false;
            plathform.openDataContext.postMessage({
                isRanking: this.isRankClick,
                text: "egret",
                year: (new Date()).getFullYear(),
                command: "close"
            });
        }
    };
    return UI_Panel;
}(Scenes));
__reflect(UI_Panel.prototype, "UI_Panel");
