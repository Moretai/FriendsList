//所有场景类的基类
abstract class Scenes extends eui.Component {

	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.onComplete,this);
	}
	//抽象方法
	protected abstract onComplete();
}