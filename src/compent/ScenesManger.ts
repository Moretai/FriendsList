class ScenesManger {

	//单例
	private static _instance:ScenesManger;
	public static get Instance() {
		if(ScenesManger._instance == null) {
			ScenesManger._instance = new ScenesManger();
		}
		return ScenesManger._instance;
	}
	public constructor() {

	}
	//所有场景的根场景
	public rootScenes:UI_Panel;
	//当前场景
	public curretScenes:Scenes;
	//改变场景方法
	public OnChangeScenes(sc:Scenes) {
		//如果当前场景非空
		if(this.curretScenes) {
			this.rootScenes.removeChild(this.curretScenes);
			this.curretScenes = null;
		}
		this.rootScenes.addChild(sc);
		this.curretScenes = sc;
		
	}
	private timer:egret.Timer;

	private isS:Boolean = false;
	//所有返回按钮(回到主城界面)方法
	public OnGoHome(s?:string[]) {
		for(let i:number = 0; i < this.rootScenes.btusList.length; i++) {
				this.rootScenes.btusList[i].selected = false;
			}
		this.rootScenes.removeChild(this.curretScenes);
		this.curretScenes=null;
		
		if(s) {
			this.rootScenes.lab_show.text = `你选择了：${s.join(',')}`;
			egret.Tween.get(this.rootScenes.lab_show).to({
				alpha:1
		    },1000,egret.Ease.quintInOut).to({
					alpha:0
				},3000,egret.Ease.quartInOut);
		}
	}
	
}