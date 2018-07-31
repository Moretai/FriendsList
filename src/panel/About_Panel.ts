class About_Panel extends Scenes {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/AboutPanel.exml";
	}
	//关闭按钮
	public close:eui.Button;

	protected onComplete() {
		//关闭按钮事件
		this.close.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			ScenesManger.Instance.OnGoHome();
		},this);
	}

	
}