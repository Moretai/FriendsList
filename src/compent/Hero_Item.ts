class Hero_Item extends eui.ItemRenderer{
	public cbox_selected:eui.CheckBox;


	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/HeroItem.exml";
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.onComplete,this);
	}

	private onComplete(){
		this.cbox_selected.addEventListener(eui.UIEvent.CHANGE,this.onChange,this);
	}
	private onChange(){
		this.data.isSelected = this.cbox_selected.selected;
	}
	protected dataChanged(): void{
		this.cbox_selected.selected = this.data.isSelected;
	}
}