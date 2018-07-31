class Hero_Panel extends Scenes {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/HeroPanel.exml";
	}
	//所有英雄集合
	public heros:eui.List;
	//确定按钮
	public confirm:eui.Button;
	//返回按钮
	public return:eui.Button;
	//按钮集合
	public BtuList:eui.List;

	protected onComplete() {
		//添加元素
		let arr:any[] = [
			{image:"resource/panel/heros_goods/heros01.png",name:"尹文婕林",introduce:"樱桃小丸子",isSelected:false},
			{image:"resource/panel/heros_goods/heros02.png",name:"德玛西亚",introduce:"樱桃小丸子",isSelected:false},
			{image:"resource/panel/heros_goods/heros03.png",name:"寒冰射手",introduce:"樱桃小丸子",isSelected:false},
			{image:"resource/panel/heros_goods/heros04.png",name:"诺克萨斯",introduce:"樱桃小丸子",isSelected:false},
			{image:"resource/panel/heros_goods/heros05.png",name:"卡特琳娜",introduce:"樱桃小丸子",isSelected:false},
			{image:"resource/panel/heros_goods/heros06.png",name:"圣枪游侠",introduce:"樱桃小丸子",isSelected:false},
			{image:"resource/panel/heros_goods/heros07.png",name:"普朗多",introduce:"樱桃小丸子",isSelected:false},
		];
		let eui_arr:eui.ArrayCollection = new eui.ArrayCollection(arr);
		this.heros.dataProvider = eui_arr;
	    this.heros.itemRenderer = Hero_Item;

		//按钮事件
		this.confirm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onConfirmClick,this);
		//返回按钮点击回到主城
		this.return.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			ScenesManger.Instance.OnGoHome();
		},this);
	}

	//确定按钮事件
	private onConfirmBegin(evt:egret.TouchEvent) {
		let btu:eui.Button = evt.target;
		btu.scaleX = btu.scaleY +=0.1;
	}
	//确定按钮事件
	private onConfirmEnd(evt:egret.TouchEvent) {
		let btu:eui.Button = evt.target;
		btu.scaleX = btu.scaleY -= 0.1;
	}
	//点击确定按钮
	private onConfirmClick() {
		let herosNum = this.heros.dataProvider;
		//定义checkvobx所有选择框的check属性
		let aNameChecked:string[] = [];
		for(let i:number = 0; i < herosNum.length; i++) {
			if(herosNum.getItemAt(i).isSelected) {
				aNameChecked.push(herosNum.getItemAt(i).name);
			}
		}
		//回到主页
		ScenesManger.Instance.OnGoHome(aNameChecked);
	}
}
