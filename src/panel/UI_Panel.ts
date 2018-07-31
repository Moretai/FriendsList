class UI_Panel extends Scenes {
	private static instance:UI_Panel;
	public static get Instance() {
		if(UI_Panel.instance == null) {
			UI_Panel.instance = new UI_Panel();
		}
		return UI_Panel.instance;
	}

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/UIPanel.exml";
	}
	
	//按钮集合
	public group_btns:eui.Group;
	//场景内的所有按钮
	public tog_player:eui.ToggleButton;
	public tog_hero:eui.ToggleButton;
	public tog_goods:eui.ToggleButton;
	public tog_about:eui.ToggleButton;
	//微信头像
	public img_head:eui.Image;
	//微信名字
	public lab_name:eui.Label;
	/**
	 * 排行榜按钮
	 */
	public btn_ranking:eui.Button;
	/**
	 * 分享按钮
	 */
	public btn_share:eui.Button;
	/**
	 * 显示的字体
	 */
	public lab_show:eui.Label;

	//按钮数组
	public btusList:eui.ToggleButton[];
	public AddArr() {
		this.btusList = [this.tog_player,this.tog_hero,this.tog_goods,this.tog_about];
		for(let i:number = 0; i < this.btusList.length; i++) {
				this.btusList[i].selected = false;
			}
	}
	protected onComplete() {
		//起初不选择
		this.lab_show.alpha = 0;
		this.AddArr();
		//遍历数组添加事件
		for(let i:number = 0; i < this.btusList.length; i++) {
			this.btusList[i].addEventListener(eui.UIEvent.CHANGE,this.OnBtuClick,this);		
		}
		//按钮添加事件
		this.btn_ranking.addEventListener(egret.TouchEvent.TOUCH_TAP,this.obBtnRankingClick,this);
		this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP,this.share,this);
	}

	public OnBtuClick(evt:egret.TouchEvent) {
		let tempBtn = <eui.ToggleButton>evt.target;
		for(let i=0; i<this.btusList.length; i++) {
			this.btusList[i].selected = (tempBtn == this.btusList[i]);
		}
		//点击到的按钮通过名字判断
		switch(tempBtn.name) {
			case "player": 
				let playerScene:Player_Panel = new Player_Panel();
				ScenesManger.Instance.OnChangeScenes(playerScene);
				break;
			case "hero":
				let heroScene:Hero_Panel = new Hero_Panel();
				ScenesManger.Instance.OnChangeScenes(heroScene);
				break;
			case "goods":
				let goodsScenes:Goods_Panel = new Goods_Panel();
				ScenesManger.Instance.OnChangeScenes(goodsScenes);
				break;
			case "about":
				let aboutScene:About_Panel = new About_Panel();
				ScenesManger.Instance.OnChangeScenes(aboutScene);
				break;
		}		
		this.setChildIndex(this.group_btns,this.numChildren);		
	}

	//主动分享按钮事件
    private share() {
        console.log("分享");
        platform.shareAppMessage();
    }


	private isRankClick:boolean = false;
    private bitmap: egret.Bitmap;
     /**
     * 排行榜遮罩，为了避免点击开放数据域影响到主域，在主域中建立一个遮罩层级来屏蔽点击事件.</br>
     * 根据自己的需求来设置遮罩的 alpha 值 0~1.</br>
     */
    private rankingListMask: egret.Shape;

	//显示微信排行榜
	public obBtnRankingClick(e:egret.TouchEvent) {
        console.log("点击排行榜");
        let plathform:any = window.platform;
        if(!this.isRankClick) {
             //处理遮罩,避免开放域数据影响主域
            this.rankingListMask = new egret.Shape();
            this.rankingListMask.graphics.beginFill(0x000000,1);
            this.rankingListMask.graphics.drawRect(0,0,this.stage.width,this.stage.height);
            this.rankingListMask.graphics.endFill();
            this.rankingListMask.alpha = 0.4;
			//设置为true,以免触摸到下面的按钮
            this.rankingListMask.touchEnabled = true;
            this.addChildAt(this.rankingListMask,999);

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
    }

	
	
}