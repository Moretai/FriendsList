window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","test":"resource/eui_skins/test.exml","buttonModel":"resource/eui_skins/buttonModel.exml","BtusList":"resource/eui_skins/BtusList.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayerBtu.exml'] = window.$exmlClass1 = (function (_super) {
	__extends($exmlClass1, _super);
	function $exmlClass1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = $exmlClass1.prototype;

	return $exmlClass1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayerPanel.exml'] = window.UIPanel = (function (_super) {
	__extends(UIPanel, _super);
	var UIPanel$Skin2 = 	(function (_super) {
		__extends(UIPanel$Skin2, _super);
		function UIPanel$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btnReturn_png"),
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UIPanel$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.source = "btnReturn_png";
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UIPanel$Skin2;
	})(eui.Skin);

	var UIPanel$Skin3 = 	(function (_super) {
		__extends(UIPanel$Skin3, _super);
		function UIPanel$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UIPanel$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btnEquip_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UIPanel$Skin3;
	})(eui.Skin);

	var UIPanel$Skin4 = 	(function (_super) {
		__extends(UIPanel$Skin4, _super);
		function UIPanel$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UIPanel$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btnStrengthen_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UIPanel$Skin4;
	})(eui.Skin);

	function UIPanel() {
		_super.call(this);
		this.skinParts = ["btn_return","fit","intensify","BtuList","equips"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.btn_return_i(),this.fit_i(),this.intensify_i(),this._Group1_i(),this._Scroller1_i()];
	}
	var _proto = UIPanel.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "commonBg_jpg";
		t.x = -1.46;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "profileTitle_png";
		t.verticalCenter = -246.5;
		t.x = 176.02;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "profileContent_png";
		t.x = 29.04;
		t.y = 187.42;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126.91;
		t.source = "skillBg_png";
		t.width = 407.29;
		t.x = 35.86;
		t.y = 464.42;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.label = "";
		t.x = 23;
		t.y = 132;
		t.skinName = UIPanel$Skin2;
		return t;
	};
	_proto.fit_i = function () {
		var t = new eui.Button();
		this.fit = t;
		t.anchorOffsetX = 80.29;
		t.anchorOffsetY = 27.28;
		t.label = "";
		t.x = 132.81;
		t.y = 648.89;
		t.skinName = UIPanel$Skin3;
		return t;
	};
	_proto.intensify_i = function () {
		var t = new eui.Button();
		this.intensify = t;
		t.anchorOffsetX = 81.81;
		t.anchorOffsetY = 27.27;
		t.label = "";
		t.x = 350.31;
		t.y = 648.88;
		t.skinName = UIPanel$Skin4;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.33;
		t.visible = false;
		t.width = 470.68;
		t.x = 2.66;
		t.y = 705.67;
		t.elementsContent = [this.BtuList_i()];
		return t;
	};
	_proto.BtuList_i = function () {
		var t = new eui.List();
		this.BtuList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.73;
		t.itemRendererSkinName = buttonModelSkin;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 455.15;
		t.x = 7.72;
		t.y = 7.91;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 4;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112;
		t.width = 388;
		t.x = 44.01;
		t.y = 474.66;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105.34;
		t.width = 574.67;
		t.x = -1.33;
		t.y = 0;
		t.elementsContent = [this.equips_i()];
		return t;
	};
	_proto.equips_i = function () {
		var t = new eui.List();
		this.equips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106.67;
		t.itemRendererSkinName = Equip;
		t.x = 3.99;
		t.y = 3.99;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 4;
		return t;
	};
	return UIPanel;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/test.exml'] = window.testSkin = (function (_super) {
	__extends(testSkin, _super);
	function testSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = testSkin.prototype;

	return testSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/AboutPanel.exml'] = window.AboutPanel = (function (_super) {
	__extends(AboutPanel, _super);
	var AboutPanel$Skin5 = 	(function (_super) {
		__extends(AboutPanel$Skin5, _super);
		function AboutPanel$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AboutPanel$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AboutPanel$Skin5;
	})(eui.Skin);

	function AboutPanel() {
		_super.call(this);
		this.skinParts = ["close"];
		
		this.elementsContent = [this._Image1_i(),this.close_i(),this._Label1_i()];
	}
	var _proto = AboutPanel.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "about_png";
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.anchorOffsetY = 0;
		t.label = "";
		t.x = 395.67;
		t.y = 214.66;
		t.skinName = AboutPanel$Skin5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Lucida Family";
		t.height = 63;
		t.size = 20;
		t.text = "开发者：白鹭时代\n版本号：1.0\n使用Egret引擎开发";
		t.width = 200;
		t.x = 197;
		t.y = 323.67;
		return t;
	};
	return AboutPanel;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Btus_about.exml'] = window.Btus_about = (function (_super) {
	__extends(Btus_about, _super);
	var Btus_about$Skin6 = 	(function (_super) {
		__extends(Btus_about$Skin6, _super);
		function Btus_about$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Btus_about$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mbtnAbout_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Btus_about$Skin6;
	})(eui.Skin);

	function Btus_about() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.elementsContent = [this._Image1_i(),this._Button1_i()];
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",2,"_Button1")
				])
		];
	}
	var _proto = Btus_about.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mbtn_Bg_png";
		t.x = 2;
		t.y = 5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "mbtn_BgFc_png";
		t.x = 2;
		t.y = 6;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		this._Button1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83;
		t.label = "";
		t.width = 102;
		t.x = 6;
		t.y = 0;
		t.skinName = Btus_about$Skin6;
		return t;
	};
	return Btus_about;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Btus_goods.exml'] = window.Btus_goods = (function (_super) {
	__extends(Btus_goods, _super);
	var Btus_goods$Skin7 = 	(function (_super) {
		__extends(Btus_goods$Skin7, _super);
		function Btus_goods$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Btus_goods$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mbtnGoods_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Btus_goods$Skin7;
	})(eui.Skin);

	function Btus_goods() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.elementsContent = [this._Image1_i(),this._Button1_i()];
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",2,"_Button1")
				])
		];
	}
	var _proto = Btus_goods.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mbtn_Bg_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "mbtn_BgFc_png";
		t.x = 1;
		t.y = 6;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		this._Button1 = t;
		t.label = "";
		t.x = 2;
		t.y = 0;
		t.skinName = Btus_goods$Skin7;
		return t;
	};
	return Btus_goods;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Btus_hero.exml'] = window.Btus_hero = (function (_super) {
	__extends(Btus_hero, _super);
	var Btus_hero$Skin8 = 	(function (_super) {
		__extends(Btus_hero$Skin8, _super);
		function Btus_hero$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Btus_hero$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mbtnHero_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Btus_hero$Skin8;
	})(eui.Skin);

	function Btus_hero() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.elementsContent = [this._Image1_i(),this._Button1_i()];
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",2,"_Button1")
				])
		];
	}
	var _proto = Btus_hero.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mbtn_Bg_png";
		t.y = 6;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "mbtn_BgFc_png";
		t.x = 0;
		t.y = 7;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		this._Button1 = t;
		t.label = "";
		t.x = 4;
		t.y = 2;
		t.skinName = Btus_hero$Skin8;
		return t;
	};
	return Btus_hero;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Btus_player.exml'] = window.Btus_player = (function (_super) {
	__extends(Btus_player, _super);
	var Btus_player$Skin9 = 	(function (_super) {
		__extends(Btus_player$Skin9, _super);
		function Btus_player$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Btus_player$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mbtnPlayer_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Btus_player$Skin9;
	})(eui.Skin);

	function Btus_player() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 87;
		this.elementsContent = [this._Button1_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",2,"_Button1"),
					new eui.SetProperty("_Button1","y",2)
				])
		];
	}
	var _proto = Btus_player.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "mbtn_Bg_png";
		t.x = 0;
		t.y = 7;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "mbtn_BgFc_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		this._Button1 = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.x = 3;
		t.y = 0;
		t.skinName = Btus_player$Skin9;
		return t;
	};
	return Btus_player;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/buttonModel.exml'] = window.buttonModelSkin = (function (_super) {
	__extends(buttonModelSkin, _super);
	var buttonModelSkin$Skin10 = 	(function (_super) {
		__extends(buttonModelSkin$Skin10, _super);
		function buttonModelSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = buttonModelSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mbtn_Bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return buttonModelSkin$Skin10;
	})(eui.Skin);

	function buttonModelSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.elementsContent = [this._Button1_i(),this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","visible",false),
					new eui.SetProperty("_Image2","y",5.5),
					new eui.SetProperty("_Image2","x",4)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","x",0)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.url"],[0],this._Image2,"source");
	}
	var _proto = buttonModelSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.skinName = buttonModelSkin$Skin10;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "mbtn_BgFc_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.width = 103;
		t.x = 4;
		t.y = 5.5;
		return t;
	};
	return buttonModelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Equip.exml'] = window.Equip = (function (_super) {
	__extends(Equip, _super);
	function Equip() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
	}
	var _proto = Equip.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "skillItemFrame_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.width = 63;
		t.x = 11;
		t.y = 9;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "KaiTi";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xbc6223;
		t.verticalAlign = "middle";
		t.width = 78;
		t.x = 6.5;
		t.y = 88;
		return t;
	};
	return Equip;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GoodsItem.exml'] = window.GoodsItem = (function (_super) {
	__extends(GoodsItem, _super);
	function GoodsItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.url"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.introduce"],[0],this._Label2,"text");
	}
	var _proto = GoodsItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "listItemBkgd_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.width = 63;
		t.x = 32;
		t.y = 17;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.textColor = 0xe2af14;
		t.width = 130;
		t.x = 148;
		t.y = 23;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.textColor = 0xE2AF14;
		t.width = 226;
		t.x = 123;
		t.y = 63;
		return t;
	};
	return GoodsItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GoodsPanel.exml'] = window.GoodsPanel = (function (_super) {
	__extends(GoodsPanel, _super);
	var GoodsPanel$Skin11 = 	(function (_super) {
		__extends(GoodsPanel$Skin11, _super);
		function GoodsPanel$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btnReturn_png"),
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GoodsPanel$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.source = "btnReturn_png";
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GoodsPanel$Skin11;
	})(eui.Skin);

	function GoodsPanel() {
		_super.call(this);
		this.skinParts = ["list_goods","btn_return"];
		
		this.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.btn_return_i()];
	}
	var _proto = GoodsPanel.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bgListPage_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 527.27;
		t.scrollPolicyH = "off";
		t.width = 469.7;
		t.x = 2.88;
		t.y = 181.15;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 530.3;
		t.width = 474.25;
		t.x = 0;
		t.y = 175.76;
		t.elementsContent = [this.list_goods_i()];
		return t;
	};
	_proto.list_goods_i = function () {
		var t = new eui.List();
		this.list_goods = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = GoodsItem;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 471.21;
		t.x = 5.91;
		t.y = 3.02;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.anchorOffsetX = 42.4;
		t.anchorOffsetY = 21;
		t.label = "";
		t.x = 66.4;
		t.y = 151;
		t.skinName = GoodsPanel$Skin11;
		return t;
	};
	return GoodsPanel;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/HeroItem.exml'] = window.HeroItem = (function (_super) {
	__extends(HeroItem, _super);
	var HeroItem$Skin12 = 	(function (_super) {
		__extends(HeroItem$Skin12, _super);
		function HeroItem$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","checked_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroItem$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "checkNo_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroItem$Skin12;
	})(eui.Skin);

	function HeroItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._CheckBox1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.introduce"],[0],this._Label2,"text");
	}
	var _proto = HeroItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "listItemBkgd_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._CheckBox1_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.label = "";
		t.top = 28;
		t.x = 384;
		t.skinName = HeroItem$Skin12;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.width = 63;
		t.x = 32;
		t.y = 18.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 25;
		t.size = 23;
		t.width = 129;
		t.x = 148;
		t.y = 21;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi";
		t.height = 25;
		t.size = 23;
		t.width = 236;
		t.x = 119;
		t.y = 61.5;
		return t;
	};
	return HeroItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/HeroPanel.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	var NewFile$Skin13 = 	(function (_super) {
		__extends(NewFile$Skin13, _super);
		function NewFile$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btnOK_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin13;
	})(eui.Skin);

	var NewFile$Skin14 = 	(function (_super) {
		__extends(NewFile$Skin14, _super);
		function NewFile$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NewFile$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btnReturn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NewFile$Skin14;
	})(eui.Skin);

	function NewFile() {
		_super.call(this);
		this.skinParts = ["confirm","return","heros","BtuList"];
		
		this.elementsContent = [this._Image1_i(),this.confirm_i(),this.return_i(),this._Image2_i(),this._Scroller1_i(),this._Group2_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bgListPage_jpg";
		t.x = -1.52;
		t.y = 0;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Button();
		this.confirm = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 21;
		t.label = "";
		t.x = 418;
		t.y = 151;
		t.skinName = NewFile$Skin13;
		return t;
	};
	_proto.return_i = function () {
		var t = new eui.Button();
		this.return = t;
		t.anchorOffsetX = 42;
		t.anchorOffsetY = 21;
		t.label = "";
		t.x = 68.33;
		t.y = 151;
		t.skinName = NewFile$Skin14;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "herosTitle_png";
		t.x = 174;
		t.y = 130;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 508;
		t.width = 460;
		t.x = 9.32;
		t.y = 186.66;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 462.67;
		t.x = 1.33;
		t.y = 1.33;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.heros_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.heros_i = function () {
		var t = new eui.List();
		this.heros = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = HeroItem;
		t.width = 437;
		t.x = 11.68;
		t.y = 9.31;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.33;
		t.scrollV = 1;
		t.visible = false;
		t.width = 470.68;
		t.x = 2.66;
		t.y = 705.67;
		t.elementsContent = [this.BtuList_i()];
		return t;
	};
	_proto.BtuList_i = function () {
		var t = new eui.List();
		this.BtuList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.73;
		t.itemRendererSkinName = buttonModelSkin;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 455.15;
		t.x = 7.72;
		t.y = 7.91;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 4;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/UIPanel.exml'] = window.UIPanel = (function (_super) {
	__extends(UIPanel, _super);
	function UIPanel() {
		_super.call(this);
		this.skinParts = ["tog_player","tog_hero","tog_goods","tog_about","group_btns"];
		
		this.elementsContent = [this._Image1_i(),this.group_btns_i()];
	}
	var _proto = UIPanel.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "homeBg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_btns_i = function () {
		var t = new eui.Group();
		this.group_btns = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83.34;
		t.width = 457.57;
		t.x = 10.82;
		t.y = 712.48;
		t.elementsContent = [this.tog_player_i(),this.tog_hero_i(),this.tog_goods_i(),this.tog_about_i()];
		return t;
	};
	_proto.tog_player_i = function () {
		var t = new eui.ToggleButton();
		this.tog_player = t;
		t.label = "";
		t.name = "player";
		t.skinName = "Btus_player";
		t.x = 2.34;
		t.y = -2;
		return t;
	};
	_proto.tog_hero_i = function () {
		var t = new eui.ToggleButton();
		this.tog_hero = t;
		t.label = "";
		t.name = "hero";
		t.skinName = "Btus_hero";
		t.x = 115;
		t.y = -0.36;
		return t;
	};
	_proto.tog_goods_i = function () {
		var t = new eui.ToggleButton();
		this.tog_goods = t;
		t.label = "";
		t.name = "goods";
		t.skinName = "Btus_goods";
		t.x = 228.99;
		t.y = 0.14;
		return t;
	};
	_proto.tog_about_i = function () {
		var t = new eui.ToggleButton();
		this.tog_about = t;
		t.label = "";
		t.name = "about";
		t.skinName = "Btus_about";
		t.x = 340;
		t.y = 0;
		return t;
	};
	return UIPanel;
})(eui.Skin);