class Player_Panel extends Scenes {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/PlayerPanel.exml";
	}
	//一键装备
	public fit:Player_Panel;
	//一键强化
	public intensify:eui.Button;
	//装备栏
	public equip:eui.HScrollBar;
	//返回按钮
	public btn_return:eui.Button;

	public player:eui.Button;
	//按钮管理List
	// public BtuList:eui.List;
	//装备管理List
	public equips:eui.List;



	protected onComplete() {
		//一键装备添加事件
		this.fit.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onFitClick,this);
		this.fit.addEventListener(egret.TouchEvent.TOUCH_END,this.onFitEnd,this);
		//一键强化添加事件
		this.intensify.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onFitClick,this);
		this.intensify.addEventListener(egret.TouchEvent.TOUCH_END,this.onFitEnd,this);
		//返回按钮添加事件
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,(evt:egret.TouchEvent)=>{
			//把父物体身上的按钮组件的selected取消
			
			ScenesManger.Instance.OnGoHome();
		},this);

		//增加装备
		let arr_equip:any[] = [
			{image:"resource/panel/profile/skillIcon01.png",name:"旋龙幻杀"},
			{image:"resource/panel/profile/skillIcon02.png",name:"魔魂天咒"},
			{image:"resource/panel/profile/skillIcon03.png",name:"天魔舞"},
			{image:"resource/panel/profile/skillIcon04.png",name:"痴情咒"},
			{image:"resource/panel/profile/skillIcon05.png",name:"吴文姬"},
			{image:"resource/panel/profile/skillIcon06.png",name:"霸天虐杀"},
			{image:"resource/panel/profile/skillIcon07.png",name:"灭魂狂萧"}
		];
		let eui_arr_equip:eui.ArrayCollection = new eui.ArrayCollection(arr_equip);
		this.equips.dataProvider = eui_arr_equip;
	}
	
	private onFitClick(evt:egret.TouchEvent):void {
		 let tempfit:Player_Panel = evt.target;
		 tempfit.scaleX = tempfit.scaleY += 0.2;
	}
	private onFitEnd(evt:egret.TouchEvent):void {
		 let tempfit:Player_Panel = evt.target;
		 tempfit.scaleX = tempfit.scaleY -= 0.2;
	}
	
}