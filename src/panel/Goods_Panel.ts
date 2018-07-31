class Goods_Panel extends Scenes {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/GoodsPanel.exml";
	}
	//list集合
	public list_goods:eui.List;
	//返回按钮
	public btn_return:eui.Button;

	protected onComplete() {
		let arr_goods:any = [
			{url:"resource/panel/heros_goods/goods01.png",name:"魔法石",introduce:"法力加成 +3"},
			{url:"resource/panel/heros_goods/goods02.png",name:"诅咒娃娃",introduce:"智力加成 +3"},
			{url:"resource/panel/heros_goods/goods03.png",name:"万圣戒指",introduce:"法力加成 +3"},
			{url:"resource/panel/heros_goods/goods04.png",name:"斗篷",introduce:"魔法抗性 +3"},
			{url:"resource/panel/heros_goods/goods05.png",name:"鹅毛笔",introduce:"法力加成 +5"},
			{url:"resource/panel/heros_goods/goods06.png",name:"血滴子",introduce:"嗜血加成 +3"},
			{url:"resource/panel/heros_goods/goods07.png",name:"屠龙刀",introduce:"力量加成 +3"}
		];
		//转换为euilist
		let eui_goods:eui.ArrayCollection = new eui.ArrayCollection(arr_goods);
		this.list_goods.dataProvider = eui_goods;

		//返回按钮添加事件
		this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			ScenesManger.Instance.OnGoHome();
		},this)
	}
}