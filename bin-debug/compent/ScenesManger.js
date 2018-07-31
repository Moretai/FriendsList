var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ScenesManger = (function () {
    function ScenesManger() {
        this.isS = false;
    }
    Object.defineProperty(ScenesManger, "Instance", {
        get: function () {
            if (ScenesManger._instance == null) {
                ScenesManger._instance = new ScenesManger();
            }
            return ScenesManger._instance;
        },
        enumerable: true,
        configurable: true
    });
    //改变场景方法
    ScenesManger.prototype.OnChangeScenes = function (sc) {
        //如果当前场景非空
        if (this.curretScenes) {
            this.rootScenes.removeChild(this.curretScenes);
            this.curretScenes = null;
        }
        this.rootScenes.addChild(sc);
        this.curretScenes = sc;
    };
    //所有返回按钮(回到主城界面)方法
    ScenesManger.prototype.OnGoHome = function (s) {
        for (var i = 0; i < this.rootScenes.btusList.length; i++) {
            this.rootScenes.btusList[i].selected = false;
        }
        this.rootScenes.removeChild(this.curretScenes);
        this.curretScenes = null;
        if (s) {
            this.rootScenes.lab_show.text = "\u4F60\u9009\u62E9\u4E86\uFF1A" + s.join(',');
            egret.Tween.get(this.rootScenes.lab_show).to({
                alpha: 1
            }, 1000, egret.Ease.quintInOut).to({
                alpha: 0
            }, 3000, egret.Ease.quartInOut);
        }
    };
    return ScenesManger;
}());
__reflect(ScenesManger.prototype, "ScenesManger");
